import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TOOD: read about this line and tell me what it doess
  app.useGlobalPipes(new ValidationPipe());
  // TODO: move the port to env variable and remove the hardcoded port
  await app.listen(process.env.LISTEN_PORT);
}

bootstrap();
