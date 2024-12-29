import { NestFactory } from '@nestjs/core';
import { ItemsModule } from './items.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ItemsModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.LISTEN_PORT);
}

bootstrap();
