export interface ProblemPromptEntity {
  problemNumber: number;
  problemTitle: string;
  description: string;
  tests: string; 
  testResults?: boolean[];
  stub: string;
  dependencies?: string[];
}

export const PlaceholderProblemPrompt: ProblemPromptEntity = {
  problemNumber: 1,
  problemTitle: "Welcome",
  description: "this is somethign serious",
  stub: "def encrypt(plaintext, key):\n",
  tests: "test this, bitch",
  testResults: [true, false, true]
}
