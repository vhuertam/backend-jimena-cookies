import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { GraphQlModule } from './graphql/graphql.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { OrderService } from './modules/order/order.service';
import { OrderModule } from './modules/order/order.module';
import { ProductModule } from './modules/product/product.module';
import { OrderProductResolver } from './modules/order-product/order-product.resolver';
import { OrderProductService } from './modules/order-product/order-product.service';
import { OrderProductModule } from './modules/order-product/order-product.module';
import { RecipeResolver } from './modules/recipe/recipe.resolver';
import { RecipeService } from './modules/recipe/recipe.service';
import { RecipeModule } from './modules/recipe/recipe.module';

@Module({
  imports: [
    GraphQlModule,
    DatabaseModule,
    UserModule,
    RoleModule,
    OrderModule,
    ProductModule,
    OrderProductModule,
    RecipeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
