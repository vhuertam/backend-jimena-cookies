// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserResolver } from './user.resolver';

// @Module({
//   providers: [UserService, UserResolver],
// })
// export class UserModule {}


import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { userProviders } from './user.providers';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UserService,
    UserResolver
  ],
})
export class UserModule {}
