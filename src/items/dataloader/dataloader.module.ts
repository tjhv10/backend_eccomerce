import { Module } from '@nestjs/common';
import { DataloaderService } from './dataloader.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsCategories } from 'src/items/Item_Category/Item_Category/ItemCategory.entity';
import { ItemCategoriesModule } from 'src/items/Item_Category/Item_Category/ItemCategory.module';

@Module({
  imports: [TypeOrmModule.forFeature([ItemsCategories]), ItemCategoriesModule],
  providers: [DataloaderService],
  exports: [DataloaderService],
})
export class DataloaderModule {}
