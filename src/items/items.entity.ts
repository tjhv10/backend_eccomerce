import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ItemStatus } from 'src/items/items-status.enum';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/categories/categories.entity';

@ObjectType()
@Entity()
export class Items {
  @PrimaryGeneratedColumn()
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
