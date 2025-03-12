
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JobDto } from 'src/jobs/dtos/job.dto';

export const Job = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) : JobDto  => {
    const request = ctx.switchToHttp().getRequest();
    return request.body;
  },
);
