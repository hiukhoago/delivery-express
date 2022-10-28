// import { verify } from 'jsonwebtoken';
// import { NestMiddleware, Injectable, ForbiddenException } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { UsersService } from 'services/users.service';
// import { Payload } from 'security/payload';

// /** The AuthMiddleware is used to
//  * (1) read the request header bearer token/user access token
//  * (2) decrypt the access token to get the user object
//  */
// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   constructor(private readonly userService: UsersService) {}

//   async use(req: Request | any, res: Response, next: () => void) {
//     const bearerHeader = req.headers.authorization;
//     const accessToken = bearerHeader && bearerHeader.split(' ')[1];
//     let user;

//     if (!bearerHeader || !accessToken) {
//       return next();
//     }

//     try {
//       const { email: email, authorities }: Payload = verify(
//         accessToken,
//         process.env.JWT_SECRET,
//       );
//       user = await this.userService.findOneById(id);
//     } catch (error) {
//       throw new ForbiddenException('Please register or sign in.');
//     }

//     if (user) {
//       req.user = user;
//     }
//     next();
//   }
// }