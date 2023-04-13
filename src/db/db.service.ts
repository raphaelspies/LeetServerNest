import { Inject, Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProblemPromptEntity, ProblemPromptORM } from '../entities/ProblemPrompt.entity'
import { CreateProblemDto } from 'src/dtos/createProblem.dto';

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

  async getAllProblems(): Promise<ProblemPromptORM[]> {
    return this.problemRepository.find();
  }

  async createProblem(problem: CreateProblemDto): Promise<ProblemPromptORM> {
    const newProblem = this.problemRepository.create(problem);
    const savedProblem = await this.problemRepository.save(newProblem);

    return savedProblem;
  }
}