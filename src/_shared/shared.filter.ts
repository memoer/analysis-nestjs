import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';

// HttpException 일 경우에만 해당 Error을 잡는다.
// throw new Error()에 해당하는 에러는 안잡는다.
// nestJs에서 제공해주는 Exception을 throw하면 잡아짐
@Catch(HttpException)
export class PracticeExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, _: ArgumentsHost) {
    console.log('exception filter catch');
    // gql formatError와 달리 response 자체를 완전히 변경시킬 수 있음
    // "errors"에만 접근을 할 수 있는 게 아니라, 데이터 응답 자체를 변경시킬 수 있다는 뜻
    if (exception.getStatus() < 500) {
      // 예측가능한 에러들만 filter를 한다.
      const response = exception.getResponse();
      const data: Record<string, any> =
        response instanceof Object ? response : { message: response };
      data.stack = exception.stack;
      // 여기서 return하면 gql - formatError를 타지 않음
      return { ok: false, data };
    }
  }
}
