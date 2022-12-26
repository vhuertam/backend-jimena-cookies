import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

import { GraphQlModule } from './graphql/graphql.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    GraphQlModule,
    DatabaseModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
