import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './items.entity';
import { DataloaderModule } from 'src/items/dataloader/dataloader.module';
import { ItemResolver } from './items.resolver';
import { ItemService } from './items.service';
import { ItemsCategories } from 'src/items/Item_Category/Item_Category/ItemCategory.entity';
import { ItemCategoriesModule } from 'src/items/Item_Category/Item_Category/ItemCategory.module';

@Module({
  imports: [
    ItemCategoriesModule,
    TypeOrmModule.forFeature([Items, ItemsCategories]),
    DataloaderModule,
  ],
  providers: [ItemResolver, ItemService],
})
export class ItemModule {}
