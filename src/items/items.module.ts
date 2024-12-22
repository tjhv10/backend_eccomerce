/* eslint-disable @typescript-eslint/camelcase */
import { Module } from '@nestjs/common';
import { ItemService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRepository } from './items.repository';
import { Item_CategoriesModule } from 'src/Item_Category/Item_Category.module';
import { CategoiesModule } from 'src/categories/categories.module';

@Module({
  providers: [ItemService],
  imports: [
    TypeOrmModule.forFeature([ItemRepository]),
    Item_CategoriesModule,
    CategoiesModule,
  ],
})
export class ItemModule {}
