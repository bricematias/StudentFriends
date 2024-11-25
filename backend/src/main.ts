import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from "mongoose";


async function bootstrap() {
  await mongoose.connect(process.env.MONGODB_URL);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
