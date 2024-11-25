import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { MongooseModule } from "@nestjs/mongoose";
import * as dotenv from "dotenv";

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
],
=======
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
>>>>>>> eb93e0b9cebc8598a1a7d8a9ab37df64ca23ff1a
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
