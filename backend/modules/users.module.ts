import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { User } from 'entities/user.entity';
import { UserMapper } from 'services/mappers/user.mapper';
import { UsersService } from 'services/users.service';
import { UsersController } from 'controllers/user.controller';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserMapper, UsersService],
  exports: [UsersService]
})
export class UsersModule {}