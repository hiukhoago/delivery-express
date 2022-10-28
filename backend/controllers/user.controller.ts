import { Body, ConflictException, Controller, Delete, Get, Ip, Logger, Param, Patch, Post, Put, Query, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { UserDTO } from '../services/dtobjects/user.dto';
import { Controller as _Controller } from './supports/base.controller'
import { Query as IQuery } from 'entities/shared/interface';
import { User } from 'entities/user.entity';
import { UsersService } from 'services/users.service';
import { isEmail } from 'class-validator';
import { Source } from './supports/source.decorator';
import { AuthUser } from 'security';
import { Payload } from 'security/payload';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from  'multer';
import { v4 as uuidv4 } from 'uuid';
import path, { join } from 'path';
import { of } from 'rxjs';

@Controller(['user','users'])
export class UsersController extends _Controller<User,UserDTO> {

    constructor(readonly service: UsersService) { 
        super(service)
    }

    @Get()
    async find(@Query() query: IQuery): Promise<UserDTO[]> {
        return this.service.find(query)
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<UserDTO> {
        return this.service.findOne(+id)
    }

    @Get(':email')
    getByEmail(@Param('email') email: string){
        return this.service.getByEmail(email)
    }

    @Post()
    async create(@Body() dto: any): Promise<UserDTO> {
        return await this.service.create(dto)
    }


    //activity nạp / rút tiền
    @Post('activity')
    async activity(@AuthUser() user?: Payload,@Body() dto?: UserDTO,source?:string): Promise<UserDTO> {
        return await this.service.activity(user,dto,source)
    }

    @Put(':id')
    async update(@Param('id') id: number,@Body() dto: UserDTO): Promise<UserDTO> {
        return await this.service.update(id, dto)
    }

    //update user
    @Patch(':id')
    async patch(@Param('id') id: number,@Body() dto: UserDTO): Promise<UserDTO> {
        return await this.service.patch(id,dto)
    }

    @Patch('isAvaliable')
    async isAvaliable(@AuthUser() user?: Payload,@Body() dto?: UserDTO): Promise<boolean> {
        return await this.service.isAvaliable(user,dto)
    }

    @Patch('changePassword/:id')
    async changePassword(@Param('id') id: number , @AuthUser() user?: Payload,@Body() dto?: UserDTO): Promise<boolean> {
        return await this.service.changePassword(id,user,dto)
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<number> {
        return this.service.delete(+id)
    }

}
