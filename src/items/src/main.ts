import { NestFactory } from '@nestjs/core';
import { ItemModule } from './item/items.module';

async function bootstrap() {
  const app = await NestFactory.create(ItemModule);
  await app.listen(3000);
}
bootstrap();
