import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemModule } from './items/items.module';
import { Repository } from 'typeorm';
import { ApolloDriver } from '@nestjs/apollo';
import { CategoiesModule } from './categories/categories.module';
import { Item_CategoriesModule } from './Item_Category/Item_Category.module';
import { ItemResolver } from './items/items.resolver';
import { ItemService } from './items/items.service';
import { Items } from './items/items.entity';
import { categories } from './categories/categories.entity';
import { Items_Categories } from './Item_Category/Item_Category.entity';
import { CategoriesResolver } from './categories/category.resolver';
import { CategoryService } from './categories/categories.service';
import { Items_CategoriesService } from './Item_Category/Item_Category.service';
import { Item_CategoriesResolver } from './Item_Category/Item_Category.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '02082003',
      database: 'Items',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Items, categories, Items_Categories],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ItemModule,
    CategoiesModule,
    Item_CategoriesModule,
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
