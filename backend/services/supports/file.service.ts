import { EntityManager, ObjectId } from '@mikro-orm/mongodb'
import { Injectable, Logger } from '@nestjs/common'
import { GridFSBucket } from 'mongodb'
import * as busboy from 'busboy';
import { IncomingMessage } from 'http';
import { Response } from 'express';
@Injectable()
export class FileService {

    bucket: GridFSBucket

    logger = new Logger(FileService.name)

    constructor(
        private readonly em: EntityManager,
    ) {
        this.bucket = new GridFSBucket(this.em.getConnection().getDb())
    }

    async put(request: IncomingMessage): Promise<[Record<string, string>, Record<string, ObjectId>]> {
        return new Promise((resolve, reject) => {
            const _busboy = busboy({ headers: request.headers });
            const files: Record<string, ObjectId> = {}
            const fields: Record<string, string> = {}
            _busboy.on('file', (name, file, info) => {
                const { filename, encoding, mimeType } = info;
                const ws = this.bucket.openUploadStream(filename, { contentType: mimeType })
                files[name] = ws.id
                this.logger.log(`uploading file ${name} - ${files[name]}`)
                file.pipe(ws)
            })
            _busboy.on('field', (name, val, info) => fields[name] = val);
            _busboy.on('close', () => resolve([fields, files]))
            _busboy.on('error', (err) => {
                this.logger.error(err)
                reject(err)
            })
            request.pipe(_busboy);
        })
    }

    async get(id: ObjectId, response: any) {
        const file = await this.em.getCollection('fs.files').findOne({ _id: id })
        if (!file) {
            response.status(404).send('file not found')
        }
        else{
            const _bstream = this.bucket.openDownloadStream(id);
            _bstream.pipe(response);
        }
    }

    async del(id: ObjectId): Promise<void> {
        return await this.bucket.delete(id);
    }

}
