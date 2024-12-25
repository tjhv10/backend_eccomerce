import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./categories.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  // providers: [CategoryService],
  exports: [TypeOrmModule.forFeature([Category])],
})
export class CategoiesModule {}
