import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DataLoaderInterceptor } from 'nestjs-dataloader';
import { ItemCategoriesResolver } from 'src/Item_Category/ItemCategory.resolver';
import { ItemCategoryLoader } from './ItemCategorydataloader.module';
import { ItemResolver } from 'src/items/items.resolver';

@Module({
  providers: [
    ItemResolver,
    ItemCategoryLoader,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
})
export class dataLoaderResolver {}
