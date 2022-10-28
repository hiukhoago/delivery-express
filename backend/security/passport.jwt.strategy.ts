
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Payload } from './payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    logger = new Logger('JwtStrategy')


  constructor(
    config: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('security.authentication.jwt.secret'),
    });
  }

  async validate(payload: Payload, done: VerifiedCallback): Promise<any> {
    this.logger.debug('validate :: ', payload)
    return done(null, payload)
  }

}