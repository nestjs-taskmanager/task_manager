import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
    required: false,
    nullable: true,
  })
  name?: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@gmail.com',
    required: true,
    nullable: false,
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
    required: true,
    nullable: false,
  })
  password: string;
}
