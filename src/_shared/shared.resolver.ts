import { Resolver, Query, Args } from '@nestjs/graphql';
import { testDecorator } from './shared.decorator';
import { ForbiddenException, HttpException, HttpStatus, UseInterceptors } from '@nestjs/common';
import { TestOutput, CommonOutput } from './dtos/output.dto';
import { SharedPipe } from './shared.pipe';
import { SharedInterceptor } from './shared.interceptor';

@Resolver()
export class SharedResolver {
  constructor() {}
  @Query(returns => CommonOutput)
  @UseInterceptors(SharedInterceptor)
  errorBelow500(@testDecorator('good') deco): CommonOutput {
    // return 하는 게 없더라도 output은 CommonOutput으로 해야 합니다.
    throw new ForbiddenException();
  }

  @Query(returns => String)
  errorUp500(): string {
    throw new HttpException('test', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Query(returns => TestOutput)
  test(@testDecorator('good') deco): TestOutput {
    console.log('resolve');
    return { id: 1, message: 'hello' };
  }

  @Query(returns => TestOutput)
  @UseInterceptors(SharedInterceptor)
  usePipe(@testDecorator('good') deco, @Args('data', SharedPipe) data: number): TestOutput {
    console.log('resolve');
    return { id: 1, message: 'usePipe' };
  }
}
