import { Param, Body, Controller, Get, Post, Logger } from '@nestjs/common';
import { ProblemPromptEntity } from '../entities/ProblemPrompt.entity';
import { PostPythonDto } from '../dtos/PostPython.dto';
import { DBService } from 'src/db/db.service';
import { CreateProblemDto } from 'src/dtos/createProblem.dto';

@Controller()
export class DBController {
  constructor(private readonly dbService: DBService) {}
  private readonly logger = new Logger(DBService.name)

  @Post('/problems/python')
  createPythonProblem(@Body('body') body: CreateProblemDto) {
    this.logger.log('Created new Python problem')
    return this.dbService.createProblem(body);
  }

  @Get('/problems/python/:id')
  getPythonProblem(@Param() id: number) {
    // will fail if the requested id doesn't exist
    return this.dbService.getProblem(id)
  }

  @Get('/problems/python/all')
  getAllProblems() {
    return this.dbService.getAllProblems()
  }
}

