import { GqlModuleOptions } from '@nestjs/graphql';
import { ConfigType } from '@nestjs/config';
import { join } from 'path';
import appConfig from '~/_config/app.config';

export default (appOptions: ConfigType<typeof appConfig>): GqlModuleOptions => {
  const { env } = appOptions;
  const isProd = env === 'production';
  const options: GqlModuleOptions = {
    // if true -> in memory
    sortSchema: true,
    playground: !isProd,
    debug: !isProd,
    context: ({ req }) => {
      console.log('context');
      return req;
    },
    // 단순히 error에 대한 formatting 만 해주는 것이라서 response에서 "errors" 쪽에만 접근이 가능하다.
    // "data" 쪽에는 접근이 불가
    formatError: error => {
      console.log('gql formatError');
      return {
        code: error.extensions.code,
        status: error.extensions.exception.status,
        message: error.message,
        locations: error.locations,
        path: error.path,
        stacktrace: error.extensions.exception.stacktrace,
      };
    },
    // 순서 : formatError -> formatResponse
  };
  if (!isProd) {
    options.autoSchemaFile = join(process.cwd(), 'src/schema.gql');
  } else {
    options.typeDefs = join(__dirname, '..', 'schema.graphql');
  }
  return options;
};
