import { Module } from '@nestjs/common';
import { Items_CategoriesService } from './Item_Category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items_Categories } from './Item_Category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Items_Categories])],
  providers: [Items_CategoriesService],
  exports: [
    Items_CategoriesService,
    TypeOrmModule.forFeature([Items_Categories]),
  ],
})
export class Item_CategoriesModule {}
