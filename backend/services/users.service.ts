import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CACHE_MANAGER, HttpException, HttpStatus, Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Builder } from 'builder-pattern';
import { User } from 'entities/user.entity';
import { Payload } from 'security/payload';
import { UserDTO } from './dtobjects/user.dto';
import { UserMapper } from './mappers/user.mapper';
import { Service } from './supports/base.service';
import { compare, hashSync } from 'bcrypt';
import { Cache } from 'cache-manager';
import { AuthorityRole } from 'entities/shared/enum';
import { Query } from 'entities/shared/interface';
import { AuthDTO } from './dtobjects/auth.dto';
import { fileURLToPath } from 'url';



// This should be a real class/interface representing a user entity
@Injectable()
export class UsersService extends Service<User, UserDTO> implements OnModuleInit {

    logger = new Logger('AuthenticationService')

    constructor(
        @InjectRepository(User)
        protected readonly repository: MongoEntityRepository<User>,
        protected readonly em: EntityManager,
        protected eventEmitter: EventEmitter2,
        @Inject(CACHE_MANAGER)
        protected cache: Cache,
        protected readonly mapper: UserMapper,

    ) {
        super(repository, em, eventEmitter, cache, mapper)
    }


    userTemplate: User = new User

    async _onModuleInit() {}
    async onModuleInit() {
        const em = this.em.fork()
        

        const admin = this.userTemplate = Builder(User)
            .email('admin!')
            .password(hashSync('1234', 10))
            .authorities([AuthorityRole.Admin])
            .name('man')
            .isActive(true)
            .phone('0962455419')
            .createdAt(new Date())
            .build()

        const driver1 = this.userTemplate = Builder(User)
            .email('driver!')
            .password(hashSync('1234', 10))
            .authorities([AuthorityRole.Driver])
            .name('driver 1')
            .isActive(true)
            .phone('0962455419')
            .isActive(true)
            .wallet({
                balance: 0,
                depositCount: 0,
                withdrawCount: 0,
                depositAmount: 0,
                withdrawAmount: 0
            })
            .createdAt(new Date())

            .build()

        const driver2 = this.userTemplate = Builder(User)
            .email('driver')
            .password(hashSync('1234', 10))
            .authorities([AuthorityRole.Driver])
            .name('driver 2')
            .isActive(true)
            .wallet({
                balance: 0,
                depositCount: 0,
                withdrawCount: 0,
                depositAmount: 0,
                withdrawAmount: 0
            })
            .phone('0962455419')
            .isActive(true)
            .createdAt(new Date())

            .build()
        await this.cache.set('userTemplate', this.userTemplate);

        //   em.findOneOrFail(User, { email: 'admin!' }).catch(() => em.persistAndFlush(admin))
        //  em.findOneOrFail(User, { email: 'driver!' }).catch(() => em.persistAndFlush(driver1))
        // em.findOneOrFail(User, { email: 'driver' }).catch(() => em.persistAndFlush(driver2))
    }

    async find(query: Query): Promise<UserDTO[]> {
        const { filters } = query
        let where = {}
        if (filters) {
            if (filters.authorities[0]) {where['authorities.0'] = filters?.authorities[0]}
            if (filters.authorities[0]) {where['authorities.0'] = filters?.authorities[0]}
        }else{
            where = {}
        }
        const users = await this.repository.find(where)
        return users.map(this.mapper.toDTO)
    }


    //find detail
    async findOne(id: number): Promise<UserDTO> {
        return await this.repository.findOneOrFail(+id)
    }


    //confirm email
    async getByEmail(email: string) {
        const user = await this.repository.findOne({ email: email });
        if (user) {
            return user;
        }
        throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
    }

    //create account mânger
    async create(dto: UserDTO, p?: Payload): Promise<UserDTO> {
        let user = { ...this.userTemplate, ... this.mapper.toEntity(dto) }
        console.log("user  create --->>", this.mapper.toEntity(dto))
        user = this.repository.create(user)
        await this.repository.persistAndFlush(user)
        return this.mapper.toDTO(user)
    }

    //update profile
    async patch(id: number, dto: UserDTO): Promise<UserDTO> {
        const users = await this.repository.findOneOrFail({ id: +id })
        console.log("users dto --->>", dto)
        if (users) {
            users.name = dto.name
            users.phone = dto.phone
            await this.repository.persistAndFlush(users)
            return this.mapper.toDTO(users)
        }
    }

    update(id: string | number, dto: UserDTO, user?: Payload): Promise<UserDTO> {
        throw new Error('Method not implemented.');
    }

    async isAvaliable(user?: Payload, dto?: UserDTO): Promise<boolean> {
        console.log("patch --->>", dto)
        const _user = await this.repository.findOneOrFail(user?.id)
        if (_user) {
            _user.isAvaliable = dto.isAvaliable
        }
        await this.repository.persistAndFlush(user)

        return _user.isAvaliable
    }

    async forgetPassword(id: number): Promise<UserDTO> {
        const user = await this.repository.findOneOrFail(id)
        return
    }

    async changePassword(id: number ,user?: Payload, dto?: any): Promise<any> {
        const _user = await this.repository.findOneOrFail({ id: +id })
        if (_user && compare(_user.password, dto.password)) {
            if(dto.newPassword !== dto.confirmPassword){
                throw new HttpException('New password and confirm password are not match', HttpStatus.BAD_REQUEST);
            }
            if(dto.newPassword === _user.password){
                throw new HttpException('New password is same as old password', HttpStatus.BAD_REQUEST);
            }
            _user.password = hashSync(dto.confirmPassword, 10)
        }else{
            throw new HttpException('Password is incorrect', HttpStatus.BAD_REQUEST);
        }
        await this.repository.persistAndFlush(_user)
        return { message: 'success' }
    }

    async delete(id: number): Promise<number> {
        return await this.repository.nativeDelete({ id: +id })
    }

    //nạp tiền
    async activity(user: Payload, dto: UserDTO,source?:string): Promise<any> {

        //nạp tiền
        if(source?.startsWith('/admin/account')){
            const _user = await this.repository.findOneOrFail(user.id)
            _user.wallet.balance +=  dto.wallet.balance
            await this.repository.persistAndFlush(_user)
            return { message: 'success' }
        }
    }

}