import { DataSource } from 'typeorm';
import { ProblemPromptORM } from '../entities/ProblemPrompt.entity';
import { databaseProviders } from './db.providers'

export const ProblemProviders = [{
  provide: 'PROBLEM_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(ProblemPromptORM),
  inject: ['DATA_SOURCE']
}]