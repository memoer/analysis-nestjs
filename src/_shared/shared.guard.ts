import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class SharedGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // false를 반환 시, block!
    console.log('guard');
    // graphql Factory에서 context로 넘긴 값들이 넘어옵니다.
    // context: ({ req }) => req,
    const ctx = GqlExecutionContext.create(context);
    return true;
  }
}
