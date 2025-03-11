import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CookieAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies?.jwt_token; // Extract token from cookie
    if (token) {
      req.headers.authorization = `Bearer ${token}`; // Attach to Authorization header
    }
    next();
  }
}
