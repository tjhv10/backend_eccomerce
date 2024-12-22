/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { categories } from './categories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(categories)
    private categoriesRepository: Repository<categories>,
  ) {}
  async getCategories(): Promise<categories[]> {
    return await this.categoriesRepository.find();
  }
  async getCategoryById(Category_Id: number): Promise<categories> {
    const found = this.categoriesRepository.findOne({ where: { Category_Id } });
    if (!found) {
      throw new NotFoundException('not found');
    } else return found;
  }
}
