
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JobDto } from 'src/shared/dtos/job.dto';


export const Job = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) : JobDto  => {
    const request = ctx.switchToHttp().getRequest();
    return request.body;
  },
);
