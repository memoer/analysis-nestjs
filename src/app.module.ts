import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { MyConfigModule } from './_config/config.module';
import { DatabaseModule } from './_database/database.module';
import { MyGraphQLModule } from './_graphql/graphql.module';
import { SharedModule } from './_shared/shared.module';
import { HealthController } from './_health/health.controller';
import { SharedMiddleware } from './_shared/shared.middleware';

@Module({
  imports: [
    //! essential module
    MyConfigModule,
    DatabaseModule,
    MyGraphQLModule,
    TerminusModule,
    //! global module
    SharedModule,
    //* each resolver
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule implements NestModule {
  // middleware 적용
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(SharedMiddleware).forRoutes('graphql');

    // consumer.apply(helmet(), SharedMiddleware).forRoutes('graphql');

    consumer.apply(SharedMiddleware).forRoutes({
      path: 'graphql',
      method: RequestMethod.POST,
    });
  }
}
