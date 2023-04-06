import { Injectable, Logger } from '@nestjs/common';
import { PlaceholderProblemPrompt, ProblemPromptEntity } from './entities/ProblemPrompt.entity';
import * as fs from 'fs';
import { PythonShell } from 'python-shell';

import { PostPythonDto } from './entities/PostPython.dto';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getProblemPrompt(): ProblemPromptEntity {
    return PlaceholderProblemPrompt;
  }

  postPythonProblem({code, ProblemPrompt}: PostPythonDto) {
    fs.writeFileSync('pythonCode.py', code);
    // fs.writeFileSync('tests.py', ProblemPrompt.tests)
    // console.log(fs.readFileSync("pythonCode.py", "utf-8"));
    // TO DO: 
    return this.executePython();
  }

  executePython() {
    return PythonShell.run('encrypt.test.py', {scriptPath: 'problems/', pythonOptions: ['-u']}).then(result => {
      let memo = []
      result.forEach(item => memo.push(Boolean(item)))
      console.log(`memo: ${memo}`)
      return memo;
    })
  }
}
