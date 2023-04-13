import { Module } from '@nestjs/common';
import { ApiKeyGuard } from './apikey.guard'
import { ApiKeyService } from './apikey.service';

@Module({
  imports: [],
  providers: [ApiKeyGuard, ApiKeyService],
})
export class AuthModule {}