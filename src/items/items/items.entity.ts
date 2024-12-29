import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/items/categories/categories.entity';
import { ItemStatus } from './items-status.enum';
// import { ItemStatus } from '../../../item_status';
import { IsInt } from 'class-validator';

@ObjectType()
@Entity()
export class Items {
  @IsInt()
  @PrimaryColumn()
  @Field(() => Int)
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Date)
  @Column()
  upload_date: Date;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column()
  price: number;

  @Field(() => String)
  @Column()
  seller_name: string;

  @Field(() => String)
  @Column()
  image_url: string;

  @Field()
  @Column()
  status: ItemStatus;

  @Field(() => [Category])
  categories: Category[];
}