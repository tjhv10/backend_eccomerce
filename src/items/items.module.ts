import { Module } from '@nestjs/common';
import { ItemService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './items.entity';

@Module({
  providers: [ItemService],
  imports: [TypeOrmModule.forFeature([Items])],
  exports: [TypeOrmModule.forFeature([Items])],
})
export class ItemModule {}
