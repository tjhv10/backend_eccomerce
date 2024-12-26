import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsCategories } from './ItemCategory.entity';
import { ItemsCategoriesService } from './ItemCategory.service';
import { Items } from 'src/items/items.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemsCategories, Items])],
  providers: [ItemsCategoriesService],
  exports: [ItemsCategoriesService],
})
export class ItemCategoriesModule {}
