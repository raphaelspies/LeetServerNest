import { DataSource } from 'typeorm';
import { ProblemPromptEntity } from '../entities/ProblemPrompt.entity';

export const ProblemProviders = [{
  provide: 'PROBLEM_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(ProblemPromptEntity),
  inject: ['DATA_SOURCE']
}]