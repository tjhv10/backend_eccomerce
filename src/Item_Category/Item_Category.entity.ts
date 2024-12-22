import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryColumn } from 'typeorm';

@ObjectType('items_categories')
@Entity()
export class Items_Categories {
  @PrimaryColumn()
  @Field(() => Int)
  Category_id: number;

  @PrimaryColumn()
  @Field(() => Int)
  Item_id: number;
}
