import { Module } from '@nestjs/common';
import { ItemCategoriesModule } from 'src/items/src/Item_Category/ItemCategory.module';
import { DataloaderService } from '../src/dataloader/dataloader.service';

@Module({
  imports: [ItemCategoriesModule],
  providers: [DataloaderService],
  exports: [DataloaderService],
})
export class DataloaderModule {}
