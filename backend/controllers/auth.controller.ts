/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Header, HttpCode, HttpException, HttpStatus, Param, Put, Query, Req, Request, Res, Sse, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { AuthService } from 'services/auth.service';
import { Get } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { UserDTO } from 'services/dtobjects/user.dto';
import { AuthDTO } from 'services/dtobjects/auth.dto';
import { Response } from 'express';
import { Delete } from '@nestjs/common';
import { Query as iQuery } from 'entities/shared/interface';
import { Observable } from 'rxjs';
import { AuthGuard, AuthUser } from 'security';
import { Payload } from 'security/payload';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from  'multer';
import { v4 as uuidv4 } from 'uuid';
import path, { join } from 'path';
import { of } from 'rxjs';


@Controller(['auth'])
export class AuthController {
  constructor(private service: AuthService) { }

  logger = new Logger('AuthenticationController');

  @Post('up')
  async up(@Body() dto: UserDTO, @Res() res: Response): Promise<any> {
    try {
      const _up = await this.service.up(dto)
      res.setHeader('authentication', 'Bearer ' + _up[0])
      return res.json(_up[1])
    } catch (error) {
      if (error instanceof Error)
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
      else {
        throw new HttpException('An unknown error occurred', HttpStatus.BAD_REQUEST)
      }
    }
  }

  @Post('in')
  @HttpCode(HttpStatus.OK)
  async in(@Body() dto: AuthDTO, @Res() res: Response): Promise<any> {
    try {
      return res.json(await this.service.in(dto))
    } catch (error) {
      if (error instanceof Error)
        throw new HttpException(error.message, HttpStatus.UNAUTHORIZED)
      else {
        throw new HttpException('알수없는 오류가 발생했습니다 ', HttpStatus.BAD_REQUEST)
      }
    }
  }

  @Get()
  @UseGuards(AuthGuard)
  async getProfile(@AuthUser() user: Payload): Promise<any> {
    console.log('getProfile', user)
    return await this.service.getProfile(user.email)
  }

  @Get('confirm')
  confirm(@Query('jwt') jwt: string): Promise<any> {
    return this.service.confirm(jwt)
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async updateProfile(@AuthUser() user: Payload, @Body() dto: UserDTO): Promise<any> {
    return await this.service.update(user.id, dto)
  }

  

  @Post('upload')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file',{
      storage: diskStorage({
          destination:'../backend/assets/avatar',
          filename: (req, file, callback)=> {
            if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
              console.log('Định dạng ảnh cho phép là: jpg, jpeg và png.')
              callback(null,'null')
            } else{
              const filename: string = path.parse(file.originalname).name.replace(/\s/g,'')+ uuidv4();
              const extension: string = path.parse(file.originalname).ext;
              callback(null,`${filename}${extension}`)
            }
          }
      })
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File ,@AuthUser() user?: Payload): Promise<any>{
    // return await this.service.update(file.filename, user.id ,  dto)
      // console.log(user);
      // return of({imagePath: file.path})
      const userEmail = user.email
      const imagesFolderPath = join(process.cwd(), 'assets/avatar/'+ file.path);
      return this.service.updateImageUser(userEmail,file.filename)
  }

  @Get(':imagename')
  async findAvatar(@Param('imagename') imagename, @Res() res,) : Promise<any>{
    return of(res.sendFile(join(process.cwd(), 'assets/avatar/' + imagename)));
  }
  
  
}
