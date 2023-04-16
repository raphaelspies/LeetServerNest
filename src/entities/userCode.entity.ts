import { Entity, Column, PrimaryGeneratedColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { ProblemPromptEntity } from './ProblemPrompt.entity';


@Entity()
export class UserCode {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => ProblemPromptEntity)
  problemNumber: number;

  @Column({ length: 80 })
  problemTitle: string;

  @Column({ length: 255 })
  description: string;
}