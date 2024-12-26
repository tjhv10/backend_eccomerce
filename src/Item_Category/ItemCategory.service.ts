import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemsCategories } from './ItemCategory.entity';
import { CategoryService } from 'src/categories/categories.service';
import { Category } from 'src/categories/categories.entity';

@Injectable()
export class ItemsCategoriesService {
  constructor(
    @InjectRepository(ItemsCategories)
    private itemCategoryRepository: Repository<ItemsCategories>,
    private categoryService: CategoryService,
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
  public async getAllNamesByCategoryIds(
    categoryIds: readonly number[],
  ): Promise<Category[]> {
    return Promise.all(
      categoryIds.map(async (id) => {
        return await this.categoryService.getCategoryById(id);
      }),
    );
  }
  public async getNamesOfCategoriesByBatch(
    categoryIds: readonly number[],
  ): Promise<(String | any)[]> {
    const batchCategories = categoryIds.map((id) => {
      return this.getItemsCategoriesByItemId(id);
    });
    const names = batchCategories.map(async (categories) => {
      (await categories).map(async (category) => {
        return (await this.categoryService.getCategoryById(category.categoryId))
          .name;
      });
    });

    // const mappedResults = this._mapResultToIds(categoryIds, names);
    console.log(names);

    return names;
  }

  // private _mapResultToIds(studentIds: readonly number[], names: String[]) {
  //   return studentIds.map(
  //     (id) => names.filter((name: String) => name === name) || null,
  //   );
  // }
}
