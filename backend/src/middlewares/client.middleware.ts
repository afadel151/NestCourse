import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ClientMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(req);
    next();
  }
}
