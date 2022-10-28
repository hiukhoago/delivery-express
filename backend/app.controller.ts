import { ObjectId } from '@mikro-orm/mongodb';
import { CACHE_MANAGER, Controller, Get, Inject, Logger, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Cache } from 'cache-manager';
import { IncomingMessage } from 'http';
import { AuthGuard } from 'security';
import { AuthService } from 'services/auth.service';
import { AppService } from './app.service';
import { FileService } from './services/supports/file.service';

@Controller()
export class AppController {

  private readonly logger = new Logger(AppController.name)

  constructor(
    private readonly appService: AppService,
    private readonly authenticationService: AuthService,
    private readonly fileService: FileService,
    private readonly eventEmitter: EventEmitter2,
    @Inject(CACHE_MANAGER) private readonly cache: Cache
  ) { }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /*------------------------------------------------------------------------------
  파일 관리
  ------------------------------------------------------------------------------*/
  @Post(['files', 'file'])
  @UseGuards(AuthGuard)
  async fileUpload(@Req() request: IncomingMessage) {
    return (await this.fileService.put(request))[1]
  }

  @Get(['file/:id','image/:id'])
  fileDownload(@Param('id') id: string, @Res() response: any) {
    this.fileService.get(new ObjectId(id), response)
  }


}
