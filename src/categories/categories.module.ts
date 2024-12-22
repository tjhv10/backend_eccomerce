import { Module } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { categories } from './categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([categories])],
  providers: [CategoryService],
  exports: [CategoryService, TypeOrmModule.forFeature([categories])],
})
export class CategoiesModule {}
