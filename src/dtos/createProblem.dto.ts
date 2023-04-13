import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsOptional,
  IsArray,
  IsEnum,
} from 'class-validator';

export class CreateProblemDto {
  @IsString()
  @MaxLength(80)
  problemTitle: string;

  @IsString()
  @MaxLength(255)
  description: string;

  @IsString()
  tests: string;

  @IsString() 
  stub: string;
}