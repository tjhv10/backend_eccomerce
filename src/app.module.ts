import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemModule } from './items/items.module';
import { ApolloDriver } from '@nestjs/apollo';
import { CategoiesModule } from './categories/categories.module';
import { ItemCategoriesModule } from './Item_Category/ItemCategory.module';
import { ItemResolver } from './items/items.resolver';
import { ItemService } from './items/items.service';
import { Items } from './items/items.entity';
import { Category } from './categories/categories.entity';
import { ItemsCategories } from './Item_Category/ItemCategory.entity';
import { CategoriesResolver } from './categories/category.resolver';
import { CategoryService } from './categories/categories.service';
import { ItemsCategoriesService } from './Item_Category/ItemCategory.service';
import { ItemCategoriesResolver } from './Item_Category/ItemCategory.resolver';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Items, Category, ItemsCategories],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ItemModule,
    CategoiesModule,
    ItemCategoriesModule,
  ],
  providers: [
    ItemResolver,
    ItemService,
    CategoriesResolver,
    CategoryService,
    ItemCategoriesResolver,
    ItemsCategoriesService,
  ],
})
export class AppModule {}
