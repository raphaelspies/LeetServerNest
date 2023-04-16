import { Param, Body, Controller, Get, Post, Logger, UseGuards, ParseIntPipe, Delete } from '@nestjs/common';
import { DBService } from 'src/db/db.service';
import { CreateProblemDto } from 'src/dtos/createProblem.dto';
import { ApiKeyGuard } from 'src/auth/apikey.guard';

@Controller('/problems')
export class DBController {
  constructor(private readonly dbService: DBService) {}
  private readonly logger = new Logger(DBService.name)

  @UseGuards(ApiKeyGuard)
  @Post('/python')
  createPythonProblem(@Body() body: CreateProblemDto) {
    this.logger.log('Created new Python problem');
    return this.dbService.createProblem(body);
  }

  @UseGuards(ApiKeyGuard)
  @Delete('/python/:id')
  deletePythonProblem(@Param("id", ParseIntPipe) id: number) {
    this.logger.log('Deleted all Python problems');
    return this.dbService.deleteProblem(id);
  }


  @Get('/python/all')
  getAllProblems() {
    return this.dbService.getAllProblems()
  }

  @Get('/python/:id')
  getPythonProblem(@Param("id", ParseIntPipe) id: number) {
    // will fail if the requested id doesn't exist
    return this.dbService.getProblem(id)
  }


}

