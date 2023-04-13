import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'

dotenv.config()
const { ENVIRONMENT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['verbose', 'error', 'log']
  });
  if (ENVIRONMENT === 'dev') {
    app.enableCors();
    Logger.log('CORS ready in dev environment');
  }
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(8000);
}
bootstrap();
