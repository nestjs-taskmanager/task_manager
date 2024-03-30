import { ApiProperty } from '@nestjs/swagger';
import { Task } from '@prisma/client';
import { UserEntity } from '../../users/entities/user.entity';

export class TaskEntity implements Task {
  @ApiProperty({
    description: 'The id of the task',
    example: 132,
  })
  id: number;

  @ApiProperty({
    description: 'The title of the task',
    example: 'Buy groceries',
  })
  title: string;

  @ApiProperty({
    description: 'The description of the task',
    example: 'Buy milk, eggs, and bread',
    required: false,
    nullable: true,
  })
  description: string | null;

  @ApiProperty({
    description: 'The body of the task',
    example: 'Buy milk, eggs, and bread from the grocery store',
  })
  body: string;

  @ApiProperty({
    description: 'The completion status of the task',
    example: false,
  })
  completed: boolean;

  @ApiProperty({
    description: 'The date and time the task was created',
    example: '2021-09-24T11:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The date and time the task was last updated',
    example: '2021-09-26T08:00:00.000Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The id of the user that task is assigned to',
    example: 'hlnb5q1fa0606fd6nsz0ledbe',
    required: false,
    nullable: true,
  })
  userId: string | null;

  @ApiProperty({
    description: 'The user that task is assigned to',
    required: false,
    nullable: true,
  })
  user?: UserEntity;

  constructor({ user, ...data }: Partial<TaskEntity>) {
    Object.assign(this, data);

    if (user) this.user = new UserEntity(user);
  }
}
