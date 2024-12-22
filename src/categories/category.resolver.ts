import { Resolver, Query, Args } from '@nestjs/graphql';
import { CategoryService } from './categories.service';
import { categories } from './categories.entity';

@Resolver(() => categories)
export class CategoriesResolver {
  constructor(private lessonService: CategoryService) {}

  @Query(() => categories)
  getCategoryById(@Args('id') id: number) {
    return this.lessonService.getCategoryById(id);
  }

  @Query(() => [categories])
  getCategories() {
    return this.lessonService.getCategories();
  }
}
