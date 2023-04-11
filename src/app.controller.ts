import { Body, Controller, Get, Post, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { ProblemPromptEntity } from './entities/ProblemPrompt.entity';
import { PostPythonDto } from './entities/PostPython.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly logger = new Logger(AppService.name)

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
