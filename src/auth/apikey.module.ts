import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiKeyGuard } from './apikey.guard'
import { ApiKeyService } from './apikey.service';

@Module({
  imports: [ConfigModule],
  providers: [ApiKeyGuard, ApiKeyService],
})
export class AuthModule {}