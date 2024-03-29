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
    console.log(this.getProblemPrompt().tests)
    fs.writeFileSync(__dirname + '/../userFiles/encrypt.py', code);
    fs.writeFileSync(__dirname + '/../userFiles/test.py', this.getProblemPrompt().tests)
    // fs.writeFileSync('tests.py', ProblemPrompt.tests)
    // console.log(fs.readFileSync("pythonCode.py", "utf-8"));
    // TO DO: 
    return this.executePython();
  }

  executePython() {
    return PythonShell.run('encrypt.test.py', {scriptPath: 'problems/', pythonOptions: ['-u']}).then(result => {
      let memo = []
      result.forEach(item => memo.push(Boolean(item)))
      return memo;
    })
  }
}
