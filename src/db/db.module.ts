import { Module } from '@nestjs/common';
import { databaseProviders } from './db.providers';
import { AuthModule } from 'src/auth/apikey.module';

@Module({
  providers: [...databaseProviders, AuthModule],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
