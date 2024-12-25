import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TOOD: read about this line and tell me what it doess
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.LISTEN_PORT);
}

bootstrap();
