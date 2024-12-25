import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from '../categories/categories.entity';
import { Items } from '../items/items.entity';
import { Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

// TODO: why do you need primary column ?
@ObjectType('items_categories')
@Entity()
export class Items_Categories {
  @ManyToMany(() => Category, (category) => category.id, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  @PrimaryColumn()
  @Field(() => Int)
  categoryId: number;

  @ManyToMany(() => Items, (item) => item.id, { onDelete: 'CASCADE' })
  @JoinTable()
  @PrimaryColumn()
  @Field(() => Int)
  itemId: number;
}
