import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class categories {
  @PrimaryColumn()
  @Field(() => Int)
  Category_Id: number;

  @Column()
  @Field(() => String)
  Name: string;
}
