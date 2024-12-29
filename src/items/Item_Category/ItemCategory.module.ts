import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsCategories } from './ItemCategory.entity';
import { ItemsCategoriesService } from '../ItemCategory.service';
import { Items } from 'items/items.entity';
import { CatergoyModule } from 'src/items/categories/categories.module';

@Module({
  imports: [TypeOrmModule.forFeature([ItemsCategories, Items]), CatergoyModule],
  providers: [ItemsCategoriesService],
  exports: [ItemsCategoriesService],
})
export class ItemCategoriesModule {}
