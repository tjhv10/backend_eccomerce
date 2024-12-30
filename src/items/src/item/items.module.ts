import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './items.entity';
import { DataloaderModule } from '../dataloader/dataloader.module';
import { ItemResolver } from './items.resolver';
import { ItemService } from './items.service';
import { ItemsCategories } from '../Item_Category/ItemCategory.entity';
import { ItemCategoriesModule } from '../Item_Category/ItemCategory.module';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    ItemCategoriesModule,
    TypeOrmModule.forFeature([ItemsCategories]),
    DataloaderModule,
  ],
})
export class ItemModule {}
