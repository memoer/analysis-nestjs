import { ConfigType } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import databaseConfig from '~/_config/database.config';
import appConfig from '~/_config/app.config';

export default (
  dbOptions: ConfigType<typeof databaseConfig>,
  appOptions: ConfigType<typeof appConfig>,
): TypeOrmModuleOptions => {
  const entities = [join(__dirname, '..', '/**/*.entity{.ts,.js}')];
  return {
    type: 'postgres',
    port: 5432,
    logging: appOptions.env === 'development', // only loggin in dev env
    synchronize: appOptions.env !== 'production', // on sync in dev/test env
    entities,
    ...dbOptions,
  };
};
