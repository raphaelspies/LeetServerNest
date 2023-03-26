import { ProblemPromptEntity } from "./ProblemPrompt.entity";

export class PostPythonDto {
  code: string;
  ProblemPrompt: ProblemPromptEntity;
}