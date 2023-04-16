import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class ProblemPromptEntity {
  @PrimaryGeneratedColumn()
  problemNumber: number;

  @Column({ length: 80 })
  problemTitle: string;

  @Column({ length: 255 })
  description: string;
  
  @Column("text")
  tests: string; 
  
  @Column("text")
  stub: string;
  
}

// export class ProblemPromptEntity extends ProblemPromptORM {
//   testResults?: boolean[];
//   dependencies?: string[];
// }

export const PlaceholderProblemPrompt: ProblemPromptEntity = {
  problemNumber: 1,
  problemTitle: "Welcome",
  description: "this is somethign serious",
  stub: `
  from LETTERS import LETTERS
  # encrypt
  # 1. same substitution cipher key
  def encrypt(plaintext, key):
    encoded = ''
    plaintext = plaintext.lower()
    for j in plaintext:
      #check if the current letter would have been added to encryption key
      #by checking if it's in LETTERS
      if (LETTERS.find(j) != -1):
        #get a numeric value for i's plaintext character
        transposeCount = LETTERS.index(j)
        #get the corresponding encrypted character
        transposedVal = key[transposeCount]
        encoded = encoded + transposedVal
    # print("plaintext: ", plaintext)
    # print("encoded: ", encoded)
    return encoded
  `,
  tests: `from encrypt import encrypt \n\n

randomTable = "rxczvabmwdepqliojyguksntfh" \n
input = "Nyala is my best friend and we hang out every day all day!" \n\n

def encryptTest(): \n
	cipherText = encrypt(input, randomTable) \n
	expectedOutput = "lfrprwgqfxvguaywvlzrlznvmrlbikuvsvyfzrfrppzrf" \n\n
	
	if cipherText == expectedOutput:  \n
		print("True") \n
		return True \n
	else: \n
		print('False') \n
		return False \n \n
	
encryptTest()\n`,
  // testResults: [true, false, true]
}
