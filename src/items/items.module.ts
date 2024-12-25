import { Module } from '@nestjs/common';
import { ItemService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item_CategoriesModule } from 'src/Item_Category/Item_Category.module';
import { CategoiesModule } from 'src/categories/categories.module';
import { Items } from './items.entity';

@Module({
  providers: [ItemService],
  imports: [
    TypeOrmModule.forFeature([Items]),
    Item_CategoriesModule,
    CategoiesModule,
  ],
  // TODO: why is this in imports
  exports: [TypeOrmModule.forFeature([Items])],
})
export class ItemModule {}
