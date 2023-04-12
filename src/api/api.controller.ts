import { Body, Controller, Get, Post, Logger } from '@nestjs/common';
import { ApiService } from './api.service';
import { ProblemPromptEntity } from '../entities/ProblemPrompt.entity';
import { PostPythonDto } from '../entities/PostPython.dto';

@Controller()
export class ApiController {
  constructor(private readonly appService: ApiService) {}
  private readonly logger = new Logger(ApiService.name)

  @Get('/python')
  getProblemPrompt(): ProblemPromptEntity {
    this.logger.log('Got problem prompt for python')
    return this.appService.getProblemPrompt();
  }

  @Post('/python')
  postPythonProblem(@Body('body') body: PostPythonDto) {
    this.logger.log('Posted code for python')
    return this.appService.postPythonProblem(body)
  }
}
