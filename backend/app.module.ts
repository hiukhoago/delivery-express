import { NewsModule } from './modules/news.module';
import { RateModule } from './modules/rate.module';
import { OrderModule } from './modules/order.module';
import { AuthModule } from './modules/auth.module';
import { UsersModule } from './modules/users.module';
import { TypeDeliveryModule } from './modules/type.delivery.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module, OnApplicationBootstrap, Scope, Logger, CacheModule, MiddlewareConsumer } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'config/configuration';
import { AppController } from 'app.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from './mail/mail.module';
import { LoggerMiddleware } from 'support/logger.middleware';
import { ActivityModule } from 'modules/activity.module';
import { FileModule } from 'modules/file.module';

require('dotenv').config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        console.log('config--------->>>', config);
        return ({
          debug: true,
          entities: ['./dist/entities/**/*.entity.js'],
          entitiesTs: ['./src/entities/**/*.entity.ts'],
          dbName: config.get('database.mongoDbs'),
          clientUrl: config.get('database.mongoUrl'),
          scope: Scope.DEFAULT,
          allowGlobalContext: false,
          validateRequired: false,
          type: 'mongo',
        });
      },
      inject: [ConfigService],

    }),
    CacheModule.register({ isGlobal: true, max: Number.MAX_SAFE_INTEGER, ttl: Number.MAX_SAFE_INTEGER }),
    EventEmitterModule.forRoot({ wildcard: true, newListener: true, removeListener: true }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    AuthModule,
    UsersModule,
    OrderModule,
    TypeDeliveryModule,
    RateModule,
    MailModule,
    NewsModule,
    ActivityModule,
    FileModule,
  ],

  controllers: [AppController],
  providers: [ AppService],
})

export class AppModule implements OnApplicationBootstrap {

  logger = new Logger('Thor')

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }

  constructor(
    private readonly appService: AppService
  ) { }

  onApplicationBootstrap() {
    this.logger.log('Delivery Express is ready!')
  }

}

