import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemModule } from './items/items.module';
import { ApolloDriver } from '@nestjs/apollo';
import { CategoiesModule } from './categories/categories.module';
import { Item_CategoriesModule } from './Item_Category/Item_Category.module';
import { ItemResolver } from './items/items.resolver';
import { ItemService } from './items/items.service';
import { Items } from './items/items.entity';
import { Category } from './categories/categories.entity';
import { Items_Categories } from './Item_Category/Item_Category.entity';
import { CategoriesResolver } from './categories/category.resolver';
import { CategoryService } from './categories/categories.service';
import { Items_CategoriesService } from './Item_Category/Item_Category.service';
import { Item_CategoriesResolver } from './Item_Category/Item_Category.resolver';
import { DataloaderModule } from './dataloader/dataloader.module';
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
      entities: [Items, Category, Items_Categories],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ItemModule,
    CategoiesModule,
    Item_CategoriesModule,
    DataloaderModule,
  ],
  providers: [
    ItemResolver,
    ItemService,
    CategoriesResolver,
    CategoryService,
    Item_CategoriesResolver,
    Items_CategoriesService,
  ],
})
export class AppModule {}
