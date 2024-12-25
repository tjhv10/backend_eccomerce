import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Items_Categories } from './Item_Category.entity';

@Injectable()
export class Items_CategoriesService {
  constructor(
    @InjectRepository(Items_Categories)
    private item_CategoryRepository: Repository<Items_Categories>,
  ) {}

  async getItems_Categories(): Promise<Items_Categories[]> {
    return this.item_CategoryRepository.find();
  }
  async getItems_CategoriesByItemId(id: number): Promise<Items_Categories[]> {
    const found = await this.item_CategoryRepository.find({
      where: { itemId: id },
    });

    if (!found || found.length === 0) {
      throw new NotFoundException('Not found');
    }

    return found;
  }
}
