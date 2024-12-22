import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ItemStatus } from './items-status.enum';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  Id: number;

  @Field()
  @Column()
  Name: string;

  @Field()
  @Column()
  Upload_date: Date;

  @Field()
  @Column()
  Description: string;

  @Field()
  @Column()
  Price: number;

  @Field()
  @Column()
  Seller_name: string;

  @Field()
  @Column()
  Image_url: string;

  @Field()
  @Column()
  Status: ItemStatus;
}
