import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from '~/_config/database.config';
import appConfig from '~/_config/app.config';
import DatabaseFactory from './database.factory';
import { MyConfigModule } from '~/_config/config.module';

export const DatabaseModule = TypeOrmModule.forRootAsync({
  imports: [MyConfigModule],
  useFactory: DatabaseFactory,
  inject: [databaseConfig.KEY, appConfig.KEY],
});
