import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
class ErrorData {
  @Field(type => Int)
  statusCode: number;
  @Field(type => String)
  message: string;
  @Field(type => String, { nullable: true })
  stack?: string;
}

@ObjectType()
export class CommonOutput {
  @Field(type => Boolean)
  ok: boolean;
  @Field(type => ErrorData, { nullable: true })
  data?: ErrorData;
}
// test
@ObjectType()
export class TestOutput {
  @Field(type => Int)
  id: number;
  @Field(type => String)
  message: string;
}
