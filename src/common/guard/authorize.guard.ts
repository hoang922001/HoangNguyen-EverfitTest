import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RequestWithUser } from '../types/request.type';

@Injectable()
export class AuthorizeGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: RequestWithUser = context.switchToHttp().getRequest();
    const userId = req.headers.authorization;
    if (!+userId) return false;

    req.user = { id: +userId };

    return true;
  }
}
