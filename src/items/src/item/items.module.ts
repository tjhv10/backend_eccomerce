import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ItemResolver } from './items.resolver';
import { ItemService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './items.entity';
import { ItemCategoriesModule } from '../Item_Category/ItemCategory.module';
import { ItemsCategories } from '../Item_Category/ItemCategory.entity';
import { DataloaderModule } from '../dataloader/dataloader.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    ItemCategoriesModule,
    DataSource,
    TypeOrmModule.forFeature([Items, ItemsCategories]),
    DataloaderModule,
  ],
  providers: [ItemResolver, ItemService],
})
export class ItemsModule {}
