import { Module } from '@nestjs/common';
import { DBService } from './db.service';
import { ProblemProviders } from './problem.providers';
import { DatabaseModule } from './db.module';
import { DBController } from './db.controller';
import { AuthModule } from 'src/auth/apikey.module';
import { ApiKeyService } from 'src/auth/apikey.service';
@Module({
  controllers: [DBController],
  imports: [DatabaseModule, AuthModule],
  exports: [],
  providers: [...ProblemProviders, DBService, ApiKeyService],
})
export class ProblemModule {}