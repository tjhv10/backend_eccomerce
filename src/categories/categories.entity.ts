/* eslint-disable @typescript-eslint/class-name-casing */
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class categories {
  @PrimaryColumn()
  @Field()
  Category_Id: number;

  @Column()
  @Field()
  Name: string;
}
