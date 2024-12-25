import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemStatus } from 'src/items/items-status.enum';
import { CreateItemDto } from './dto/create-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Items } from './items.entity';
import { Repository } from 'typeorm';
import { Items_CategoriesService } from 'src/Item_Category/Item_Category.service';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Items)
    private itemRepository: Repository<Items>,
    private item_category_service: Items_CategoriesService,
  ) {}
  async getItems(): Promise<Items[]> {
    return await this.itemRepository.find({
      where: { status: ItemStatus.ACTIVE },
    });
  }
  async getItemById(id: number): Promise<Items> {
    const found = await this.itemRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException('Item not found by id, id doesnt exist');
    } else return found;
  }

  async isIdExist(id: number): Promise<boolean> {
    const found = await this.itemRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException('Item not found by id, id doesnt exist');
    } else return true;
  }

  async createItem(createTaskDto: CreateItemDto): Promise<Items> {
    const item = this.itemRepository.create({
      ...createTaskDto,
      status: ItemStatus.ACTIVE,
    });
    this.itemRepository.save(item);
    return item;
  }

  // FIXME: read about onDelete cascade for typeorm
  async deleteItem(id: number) {
    await this.item_category_service.deleteItems_CategoriesByItemId(id);
    const result = await this.itemRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateItemStatus(id: number, status: ItemStatus): Promise<Items> {
    const item = await this.getItemById(id);
    item.status = status;
    return this.itemRepository.save(item);
  }

  async updateItemPrice(id: number, price: number): Promise<Items> {
    const item = await this.getItemById(id);
    item.price = price;
    return this.itemRepository.save(item);
  }
}
