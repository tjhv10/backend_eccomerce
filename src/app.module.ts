import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ItemModule } from './items/items.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CategoiesModule } from './categories/categories.module';
import { ItemCategoriesModule } from './Item_Category/ItemCategory.module';
import { Items } from './items/items.entity';
import { Category } from './categories/categories.entity';
import { ItemsCategories } from './Item_Category/ItemCategory.entity';
import { ConfigModule } from '@nestjs/config';
import { DataloaderModule } from './dataloader/dataloader.module';
import { DataloaderService } from './dataloader/dataloader.service';

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
    ItemModule,
    CategoiesModule,
    ItemCategoriesModule,
    DataloaderModule,
  ],
})
export class AppModule {}
