import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from 'controllers/auth.controller';
import { MailModule } from 'mail/mail.module';
import { JwtStrategy } from 'security/passport.jwt.strategy';
import { AuthService } from 'services/auth.service';
import { UserMapper } from 'services/mappers/user.mapper';
import { UsersModule } from './users.module';

@Module({
  imports: [UsersModule,MailModule,PassportModule.register({session : true}),
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => ({
        secret: config.get('security.authentication.jwt.secret'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService]
    }),],
  controllers: [AuthController,],
  providers: [AuthService,JwtStrategy,UserMapper],
  exports: [AuthService],
})
export class AuthModule {}
