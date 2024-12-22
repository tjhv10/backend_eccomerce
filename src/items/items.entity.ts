import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ItemStatus } from './items-status.enum';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  Id: number;

  @Field(() => String)
  @Column({ nullable: true })
  Name: string;

  @Field(() => Date)
  @Column({ nullable: true })
  Upload_date: Date;

  @Field(() => String)
  @Column()
  Description: string;

  @Field(() => String)
  @Column()
  Price: number;

  @Field(() => String)
  @Column()
  Seller_name: string;

  @Field(() => String)
  @Column()
  Image_url: string;

  @Field()
  @Column()
  Status: ItemStatus;
}
