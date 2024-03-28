import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({
    description: 'The title of the task',
  })
  title: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(240)
  @ApiProperty({
    description: 'The description of the task',
    required: false,
  })
  description?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  @ApiProperty({
    description: 'The body of the task',
  })
  body: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'The completion status of the task',
    required: false,
    default: false,
  })
  completed?: boolean = false;
}
