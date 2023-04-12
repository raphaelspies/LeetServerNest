import { Inject, Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProblemPromptORM } from '../entities/ProblemPrompt.entity'

@Injectable()
export class DBService {
  constructor(
    @Inject('PROBLEM_REPOSITORY')
    private problemRepository: Repository<ProblemPromptORM>,
  ) {}

  async getProblem(problemNumber: number): Promise<ProblemPromptORM> {
    return this.problemRepository.findOneBy({
      problemNumber
    });
  }
}