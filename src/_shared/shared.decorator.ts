import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const testDecorator = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    console.log('decorator');
    const gql = GqlExecutionContext.create(ctx);
    // console.log(data); // "good"
    // console.log(gql.getArgs()); // {}
    // console.log(gql.getClass()); // [class PracticeResolver]
    // console.log(gql.getHandler()); // [Function: boolean]
    // console.log(gql.getInfo()); // object
    // console.log(gql.getRoot()); // undefined
    // console.log(gql.getType()); // graphql
    return 'decorator';
  },
);
