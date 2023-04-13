import { DataSource } from 'typeorm';
import { ProblemPromptORM } from '../entities/ProblemPrompt.entity';

export const ProblemProviders = [{
  provide: 'PROBLEM_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(ProblemPromptORM),
  inject: ['DATA_SOURCE']
}]