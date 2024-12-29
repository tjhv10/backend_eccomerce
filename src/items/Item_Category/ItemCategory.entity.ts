import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from '../../../categories/categories.entity';
import { Items } from '../../items/items.entity';
import { Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { IsInt } from 'class-validator';

@ObjectType('itemsCategories')
@Entity()
export class ItemsCategories {
  @ManyToMany(() => Category, (category) => category.id, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  @PrimaryColumn()
  @IsInt()
  @Field(() => Int)
  categoryId: number;

  @ManyToMany(() => Items, (item) => item.id, { onDelete: 'CASCADE' })
  @JoinTable()
  @IsInt()
  @PrimaryColumn()
  @Field(() => Int)
  itemId: number;
}
