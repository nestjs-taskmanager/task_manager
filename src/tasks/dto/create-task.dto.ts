import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'The title of the task',
  })
  title: string;

  @ApiProperty({
    description: 'The description of the task',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'The body of the task',
  })
  body: string;

  @ApiProperty({
    description: 'The completion status of the task',
    required: false,
    default: false,
  })
  completed?: boolean = false;
}
