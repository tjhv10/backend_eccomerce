import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsCategories } from './ItemCategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemsCategories])],
  // providers: [ItemsCategoriesService],
  exports: [TypeOrmModule.forFeature([ItemsCategories])],
})
export class ItemCategoriesModule {}
