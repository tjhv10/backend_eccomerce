import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsInt } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Category {
  @PrimaryColumn()
  @IsInt()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;
}
