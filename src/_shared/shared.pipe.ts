import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
// transformation / validation 두 용도로 사용한다.
@Injectable()
export class SharedPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('pipe');
    // console.log(value); // @Args('data', SharedPipe) data:number -> data의 값이 찍힌다.
    // console.log(metadata)
    return value;
  }
}
