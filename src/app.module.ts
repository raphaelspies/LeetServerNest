import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { DatabaseModule } from './db/db.module'
import { ProblemModule } from './db/problem.module';

@Module({
  imports: [ApiModule, DatabaseModule, ProblemModule],
  // controllers: [ApiController],
  // providers: [AppService],
})
export class AppModule {}
