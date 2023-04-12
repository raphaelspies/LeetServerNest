import { Module } from '@nestjs/common';
import { databaseProviders } from './db.providers';
import { DBService } from './db.service';
import { ProblemProviders } from './problem.providers';
// import { DatabaseModule } from './'

// @Module({
//   // imports: [ DatabaseModule],
//   providers: [...databaseProviders],
//   exports: [...databaseProviders],
// })
// export class DatabaseModule {}

@Module({
  // imports: [ DatabaseModule],
  providers: [...ProblemProviders, DBService, ],
  exports: [...ProblemProviders],
})
export class ProblemModule {}