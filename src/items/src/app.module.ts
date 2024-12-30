import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemsModule } from './item/items.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CatergoyModule } from './category/categories.module';
import { ItemCategoriesModule } from './Item_Category/ItemCategory.module';
import { Category } from './category/categories.entity';
import { ItemsCategories } from './Item_Category/ItemCategory.entity';
import { ConfigModule } from '@nestjs/config';
import { DataloaderModule } from './dataloader/dataloader.module';
import { DataloaderService } from './dataloader/dataloader.service';
import { Items } from './item/items.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      //   host: process.env.DB_HOST,
      //   port: parseInt(process.env.DB_PORT),
      //   username: process.env.DB_USERNAME,
      //   password: '02082003',
      //   database: process.env.DB_DATABASE,
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '02082003',
      database: 'Items',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Items, Category, ItemsCategories],
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [DataloaderModule],
      useFactory: (dataloaderService: DataloaderService) => {
        return {
          autoSchemaFile: true,
          context: () => ({
            loaders: dataloaderService.getLoaders(),
          }),
        };
      },
      inject: [DataloaderService],
    }),
    ItemsModule,
    CatergoyModule,
    ItemCategoriesModule,
    DataloaderModule,
  ],
})
export class AppModule {}
