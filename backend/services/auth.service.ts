import { BadRequestException, CACHE_MANAGER, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';

import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { JwtService } from '@nestjs/jwt';
import { compare, hashSync } from 'bcrypt';
import { Builder } from 'builder-pattern';
import { Query } from 'entities/shared/interface';
import { User } from 'entities/user.entity';
import { Payload } from 'security/payload';
import { AuthDTO } from './dtobjects/auth.dto';
import { UserDTO } from './dtobjects/user.dto';
import { UserMapper } from './mappers/user.mapper';
import { Service as _Service } from './supports/base.service';
import { UsersService } from './users.service';
import { wrap } from '@mikro-orm/core';
import { Cache } from 'cache-manager';
import { MailService } from 'mail/mail.service';
import { AuthorityRole } from 'entities/shared/enum';


@Injectable()
export class AuthService extends _Service<User, UserDTO>{

  update(id: number, dto: UserDTO, user?: Payload): Promise<UserDTO> {
    throw new Error('Method not implemented.');
  }

  constructor(
    protected readonly em: EntityManager,
    protected eventEmitter: EventEmitter2,
    @Inject(CACHE_MANAGER)
    protected readonly cache: Cache,
    protected readonly mapper: UserMapper,

    protected jwtService: JwtService,
    private usersService: UsersService,
    private mailService: MailService,

  ) {
    super(null, em, eventEmitter, cache, mapper)
  }

  // async in(dto: AuthDTO): Promise<{ accessToken: string }> {
  async in(dto: AuthDTO): Promise<[string, UserDTO]> {
    console.log('dto auth', dto)
    try {
      const user: User = await this.usersService.getByEmail(dto.email);
      if (!user) {
        throw new UnauthorizedException('Invalid credentials')
      }
      if (!user.isActive) {
        throw new UnauthorizedException('Email not confirmed')
      }
      if (!await compare(dto.password, user.password)) {
        this.logger.debug('PasswordNotMatch', user.password, dto.password)
        this.em.persist(user)
        throw Error('PasswordNotMatch')
      }
      this.em.persist(user)
      const payload: Payload = Builder<Payload>().id(user?.id).email(user.email).name(user.name).phone(user.phone).wallet(user.wallet).avatar(user.avatar).authorities(user.authorities).build()
      return [this.jwtService.sign(payload), this.mapper.toDTO(user)]
      // return {accessToken :this.jwtService.sign(payload)}
    } catch (error) {
      throw new UnauthorizedException('Incorrect login credentials!');
    }
  }

  async up(dto: UserDTO): Promise<[string, UserDTO]> {
    try {
      const findUser = await this.em.findOne(User, { email: dto.email })
      const user = this.em.create(User, dto)
      if (findUser) {
        console.log('Error: Email already exists')
        return
      }

      user.email = dto.email
      user.password = hashSync(dto.password, 10)
      user.name = dto.name
      user.phone = dto.phone
      user.address = dto.address
      user.authorities =  [dto?.authorities[0]]
      user.isActive = false
      user.wallet = dto.wallet

      user.createdAt = new Date()

      this.em.persistAndFlush(user)
      const payload = Builder<Payload>().id(user.id).email(user.email).name(user.name).phone(user.phone).authorities(user.authorities).build()
      this.logger.debug('payload--------------->>>', wrap(user).toJSON())

      const token = this.jwtService.sign(payload)

      this.mailService.sendUserConfirmation(this.mapper.toDTO(user), token);

      return [token, this.mapper.toDTO(user)]
    } catch (error) {
      this.logger.debug('sign in error :', error)
      throw error
    }

  }

  async confirm(jwt: string): Promise<any> {
    const payload = this.decode(jwt) as Payload
    const user: User = await this.usersService.getByEmail(payload.email);
    if (user.isActive) {
      throw new BadRequestException('Email already confirmed');
    }
    user.isActive = true;
    this.em.persistAndFlush(user);
    return { message: 'Your account is confirmed' }
  }


  decode = (token: string) => this.jwtService.decode(token)

  async getProfile(email: string): Promise<any> {
    const user = await this.em.findOneOrFail(User, { email })
    console.log('user', user)
    return { user: this.mapper.toDTO(user) }
  }

  find(query: Query, user?: Payload): Promise<UserDTO[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<UserDTO> {
    throw new Error('Method not implemented.');
  }
  create(dto: UserDTO): Promise<UserDTO> {
    throw new Error('Method not implemented.');
  }
  patch(id: string, dto: UserDTO): Promise<UserDTO> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<number> {
    throw new Error('Method not implemented.');
  }


  // async saveFile(file: Express.Multer.File): Promise<any>{
  //   const fileB64 = file.buffer.toString('base64')
  //  return  await this.usersService.create({file: fileB64})
  // }

  // async  getFile(email: string):Promise<any>{

  //   const user = await this.usersService.findOne({email: email})
  //   if(!user) throw new NotFoundException('User not found')

  //   const file = user.avatar

  //   return Buffer.from(file, 'base64')
  //   }
  async updateImageUser(email: string, avatar: string): Promise<UserDTO> {
    const users = await this.em.findOne(User, { email })
    if (users) {
      users.email = email;
      users.avatar = avatar;
      await this.em.persistAndFlush(users)
      return this.mapper.toDTO(users)
    }
  }

}
