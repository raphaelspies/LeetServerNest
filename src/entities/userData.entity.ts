import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class UserData {
  @PrimaryGeneratedColumn()
  problemNumber: number;

  @Column("text")
  code: string;
}
