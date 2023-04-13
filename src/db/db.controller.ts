import { Param, Body, Controller, Get, Post, Logger, UseGuards } from '@nestjs/common';
import { DBService } from 'src/db/db.service';
import { CreateProblemDto } from 'src/dtos/createProblem.dto';
import { ApiKeyGuard } from 'src/auth/apikey.guard';

@Controller()
export class DBController {
  constructor(private readonly dbService: DBService) {}
  private readonly logger = new Logger(DBService.name)

  @UseGuards(ApiKeyGuard)
  @Post('/problems/python')
  createPythonProblem(@Body() body: CreateProblemDto) {
    this.logger.log('Created new Python problem');
    return this.dbService.createProblem(body);
  }

  @Get('/problems/python/all')
  getAllProblems() {
    return this.dbService.getAllProblems()
  }

  @Get('/problems/python/:id')
  getPythonProblem(@Param() id: number) {
    // will fail if the requested id doesn't exist
    return this.dbService.getProblem(id)
  }


}

