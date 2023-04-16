import { Injectable, Logger } from '@nestjs/common';
import { PlaceholderProblemPrompt, ProblemPromptEntity } from '../entities/ProblemPrompt.entity';
import * as fs from 'fs';
import { PythonShell } from 'python-shell';

import { PostPythonDto } from '../dtos/PostPython.dto';

@Injectable()
export class ApiService {
  private readonly logger = new Logger(ApiService.name);

  getProblemPrompt(): ProblemPromptEntity {
    return PlaceholderProblemPrompt;
  }

  postPythonProblem({code, ProblemPrompt}: PostPythonDto) {
    // console.log(this.getProblemPrompt().tests)
    if (!fs.existsSync(__dirname + '/../userFiles')) {
      fs.mkdirSync(__dirname + '/../userFiles')
    }
    fs.writeFileSync(__dirname + '/../../userFiles/encrypt.py', code);
    fs.writeFileSync(__dirname + '/../../userFiles/test.py', this.getProblemPrompt().tests)
    return this.executePythonTests();
  }

  executePythonTests() {
    return PythonShell.run('encrypt.test.py', {scriptPath: 'problems/', pythonOptions: ['-u']}).then(result => {
      let memo = []
      result.forEach(item => memo.push(Boolean(item)))
      return memo;
    })
  }
}
