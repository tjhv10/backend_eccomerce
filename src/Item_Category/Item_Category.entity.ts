/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/camelcase */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Items_Categories {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  Category_id: number;

  @PrimaryGeneratedColumn()
  @Field(() => Int)
  Item_id: number;
}
