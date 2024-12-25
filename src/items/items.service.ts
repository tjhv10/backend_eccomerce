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
    // TODO: don't fetch all hte itmes, filter in DB read about the find() function
    return (await this.itemRepository.find()).filter(
      (item) => item.status === ItemStatus.ACTIVE,
    );
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

  // FIXME: read more about typeorm and change it
  async updateItemStatus(id: number, status: ItemStatus): Promise<Items> {
    const task = await this.getItemById(id);

    task.status = status;
    await this.itemRepository.save(task);

    return task;
  }

  async updateItemPrice(id: number, price: number): Promise<Items> {
    const task = await this.getItemById(id);

    task.price = price;
    await this.itemRepository.save(task);

    return task;
  }
}
