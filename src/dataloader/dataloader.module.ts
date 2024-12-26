import { Module } from '@nestjs/common';
import { DataloaderService } from './dataloader.service';
import { ItemsCategoriesService } from 'src/Item_Category/ItemCategory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsCategories } from 'src/Item_Category/ItemCategory.entity';
import { ItemCategoriesModule } from 'src/Item_Category/ItemCategory.module';

@Module({
  imports: [TypeOrmModule.forFeature([ItemsCategories]), ItemCategoriesModule],
  providers: [DataloaderService],
  exports: [DataloaderService],
})
export class DataloaderModule {}
