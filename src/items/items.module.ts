import { ItemService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './items.entity';
import { APP_INTERCEPTOR, Module } from '@nestjs/core';
import { DataLoaderInterceptor } from 'nestjs-dataloader';
import { ItemCategoryLoader } from '../Item_Category/ItemCategorydataloader.module';
import { ItemsCategoriesService } from 'src/Item_Category/ItemCategory.service';
import { ItemsCategories } from 'src/Item_Category/ItemCategory.entity';
import { ItemCategoriesResolver } from 'src/Item_Category/ItemCategory.resolver';

@Module({
  providers: [
    ItemService,
    ItemCategoriesResolver,
    ItemsCategoriesService,
    ItemCategoryLoader,
    ItemsCategoriesModule,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    },
  ],
  imports: [
    TypeOrmModule.forFeature([Items]),
    TypeOrmModule.forFeature([ItemsCategories]),
  ],
  exports: [TypeOrmModule.forFeature([Items])],
})
export class ItemModule {}
