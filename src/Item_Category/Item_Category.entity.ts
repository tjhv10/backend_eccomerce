import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/categories/categories.entity';
import { Items } from 'src/items/items.entity';
import { Entity, ManyToMany, PrimaryColumn } from 'typeorm';

// TODO: why do you need primary column ?
@ObjectType('items_categories')
@Entity()
export class Items_Categories {
  @ManyToMany(() => Category, (category) => category.id)
  @PrimaryColumn()
  @Field(() => Int)
  categoryId: number;

  @ManyToMany(() => Items, (item) => item.id)
  @PrimaryColumn()
  @Field(() => Int)
  itemId: number;
}
