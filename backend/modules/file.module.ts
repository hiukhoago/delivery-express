import { Module } from '@nestjs/common'
import { FileService } from 'services/supports/file.service';

@Module({
  providers: [FileService],
  exports: [FileService],
})
export class FileModule { }

