import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemsCategories } from './ItemCategory.entity';
import { CategoryService } from 'src/categories/categories.service';

@Injectable()
export class ItemsCategoriesService {
  categoryService: CategoryService;
  constructor(
    @InjectRepository(ItemsCategories)
    private itemCategoryRepository: Repository<ItemsCategories>,
  ) {}

  async getItemsCategories(): Promise<ItemsCategories[]> {
    return this.itemCategoryRepository.find();
  }

  async getItemsCategoriesByItemId(id: number): Promise<ItemsCategories[]> {
    console.log('hi');

    const found = await this.itemCategoryRepository.find({
      where: { itemId: id },
    });
    console.log(found);
    if (!found || found.length === 0) {
      throw new NotFoundException('Item dosent have categories');
    }

    return found;
  }
  public async getAllNamesByCategoryIds(
    categoryIds: readonly number[],
  ): Promise<String[]> {
    return Promise.all(
      categoryIds.map(async (id) => {
        return (await this.categoryService.getCategoryById(id)).name;
      }),
    );
  }
  public async getNamesOfCategoriesByBatch(
    categoryIds: readonly number[],
  ): Promise<(String | any)[]> {
    const names = await this.getAllNamesByCategoryIds(categoryIds);
    // const mappedResults = this._mapResultToIds(categoryIds, names);
    return names;
  }

  // private _mapResultToIds(studentIds: readonly number[], names: String[]) {
  //   return studentIds.map(
  //     (id) => names.filter((name: String) => name === name) || null,
  //   );
  // }
}
