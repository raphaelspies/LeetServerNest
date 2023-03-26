import { Injectable, Logger } from '@nestjs/common';
import { PlaceholderProblemPrompt, ProblemPromptEntity } from './entities/ProblemPrompt.entity';
import * as fs from 'fs';

import { PostPythonDto } from './entities/PostPython.dto';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)

  getProblemPrompt(): ProblemPromptEntity {
    return PlaceholderProblemPrompt;
  }

  postPythonProblem({code, ProblemPrompt}: PostPythonDto) {
    fs.writeFileSync('pythonCode.py', code)
    console.log(fs.readFileSync("pythonCode.py", "utf-8"))
    // TO DO: 
    return "python problem output!"
  }
}
