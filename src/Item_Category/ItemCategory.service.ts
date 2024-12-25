import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemsCategories } from './ItemCategory.entity';

@Injectable()
export class ItemsCategoriesService {
  constructor(
    @InjectRepository(ItemsCategories)
    private itemCategoryRepository: Repository<ItemsCategories>,
  ) {}

  async getItemsCategories(): Promise<ItemsCategories[]> {
    return this.itemCategoryRepository.find();
  }
  async getItemsCategoriesByItemId(id: number): Promise<ItemsCategories[]> {
    const found = await this.itemCategoryRepository.find({
      where: { itemId: id },
    });

    if (!found || found.length === 0) {
      throw new NotFoundException('Item dosent have categories');
    }

    return found;
  }
}
