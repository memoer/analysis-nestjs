import { Resolver, Query, Args } from '@nestjs/graphql';
import { testDecorator } from './shared.decorator';
import { ForbiddenException, UseInterceptors } from '@nestjs/common';
import { TestOutput, CommonOutput } from './dtos/output.dto';
import { SharedPipe } from './shared.pipe';
import { SharedInterceptor } from './shared.interceptor';

@Resolver()
export class SharedResolver {
  constructor() {}
  @Query(returns => CommonOutput)
  @UseInterceptors(SharedInterceptor)
  errorBelow500(@testDecorator('good') deco, @Args('data', SharedPipe) data: number): CommonOutput {
    console.log('resolver');
    // return 하는 게 없더라도 output은 CommonOutput으로 해야 합니다.
    throw new ForbiddenException();
  }

  @Query(returns => String)
  @UseInterceptors(SharedInterceptor)
  errorUp500(@testDecorator('good') deco, @Args('data', SharedPipe) data: number): string {
    console.log('resolver');
    throw new ForbiddenException();
  }

  @Query(returns => TestOutput)
  @UseInterceptors(SharedInterceptor)
  succss(@testDecorator('good') deco, @Args('data', SharedPipe) data: number): TestOutput {
    console.log('resolver');
    return { id: 1, message: 'hello' };
  }
}
