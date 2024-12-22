/* eslint-disable @typescript-eslint/camelcase */
import { Module } from '@nestjs/common';
import { Items_CategoriesService } from './Item_Category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item_CategoryRepository } from './Item_Category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Item_CategoryRepository])],
  providers: [Items_CategoriesService],
  exports: [
    Items_CategoriesService,
    TypeOrmModule.forFeature([Item_CategoryRepository]),
  ],
})
// eslint-disable-next-line @typescript-eslint/class-name-casing
export class Item_CategoriesModule {}
