import { NestFactory } from '@nestjs/core';
import { OrderModule } from './orders/order.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderModule);
  await app.listen(3001);
}
bootstrap();
