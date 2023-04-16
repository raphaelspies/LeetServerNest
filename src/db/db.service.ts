import { Inject, Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProblemPromptEntity } from '../entities/ProblemPrompt.entity'
import { CreateProblemDto } from 'src/dtos/createProblem.dto';

@Injectable()
export class DBService {
  constructor(
    @Inject('PROBLEM_REPOSITORY')
    private problemRepository: Repository<ProblemPromptEntity>,
  ) {}

  async getProblem(problemNumber: number): Promise<ProblemPromptEntity> {
    return this.problemRepository.findOneByOrFail({
      problemNumber
    });
  }

  async getAllProblems(): Promise<ProblemPromptEntity[]> {
    return this.problemRepository.find();
  }

  async deleteProblem(problemNumber): Promise<any> {
    return this
      .problemRepository
      .createQueryBuilder('PROBLEM_REPOSITORY')
      .softDelete()
      .where((`problemNumber=${problemNumber}`)).execute();
  }

  async createProblem(problem: CreateProblemDto): Promise<ProblemPromptEntity> {
    const newProblem = this.problemRepository.create(problem);
    const savedProblem = await this.problemRepository.save(newProblem);

    return savedProblem;
  }
}