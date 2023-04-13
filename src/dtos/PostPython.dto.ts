import { ProblemPromptEntity } from "../entities/ProblemPrompt.entity";

export class PostPythonDto {
  code: string;
  ProblemPrompt: ProblemPromptEntity;
}