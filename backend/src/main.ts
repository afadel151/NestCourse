import * as cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  app.enableCors({
    origin: 'http://localhost:3000', // Replace with your Nuxt frontend URL
    credentials: true, // ✅ Allows cookies to be sent and received
    allowedHeaders: ['Content-Type', 'Authorization'], // ✅ Allow Authorization header
    exposedHeaders: ['Authorization'], // ✅ Expose Authorization header in responses
  });
  app.use(cookieParser());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
