import { Injectable, NestMiddleware, Logger } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  logger = new Logger('api request')

  use(req: Request, res: Response, next: NextFunction) {
    const source = req.headers['source']

    /*
    const userAgent = req.headers['user-agent'] 
    const secFetchSite = req.headers['sec-fetch-site'] 
    if(secFetchSite != 'same-site'){
      this.logger.error(`${req.method} ${req} ::: ${secFetchSite}`)
      //return res.status(403).send('접근이 제한되었습니다')
    } 
    */

    if(req.method == 'GET'){
      this.logger.debug(`\n\ncalled "${req.method}:${req.baseUrl}" from "${source ?? 'unknown'}" \n\n` + JSON.stringify(req.query,null,4))
    }
    else this.logger.debug(`\n\ncalled "${req.method}:${req.baseUrl}" from "${source ?? 'unknown'}" \n\n` + JSON.stringify(req.body,null,4))
    next()
  }
}
