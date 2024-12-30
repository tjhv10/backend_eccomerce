import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Items } from '../item/items.entity';
import { Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { IsInt } from 'class-validator';
import { Category } from '../category/categories.entity';

@ObjectType('itemsCategories')
@Entity()
export class ItemsCategories {
  @ManyToMany(() => Category, (category: Category) => category.id, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  @PrimaryColumn()
  @IsInt()
  @Field(() => Int)
  categoryId: number;

  @ManyToMany(() => Items, (item: Items) => item.id, { onDelete: 'CASCADE' })
  @JoinTable()
  @IsInt()
  @PrimaryColumn()
  @Field(() => Int)
  itemId: number;
}
