import { Module } from '@nestjs/common';
import { databaseProviders } from './db.providers';
import { DBService } from './db.service';
import { ProblemProviders } from './problem.providers';
import { DatabaseModule } from './db.module';
import { DBController } from './db.controller';
@Module({
  controllers: [DBController],
  imports: [DatabaseModule],
  // exports: [...ProblemProviders],
  providers: [...ProblemProviders, DBService],
})
export class ProblemModule {}