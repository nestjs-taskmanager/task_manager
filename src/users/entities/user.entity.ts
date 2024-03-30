import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({
    description: 'The id of the user',
    example: 'hlnb5q1fa0606fd6nsz0ledbe',
  })
  id: string;

  @ApiProperty({
    description: 'The date and time the user was created',
    example: '2021-09-24T11:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The date and time the user was last updated',
    example: '2021-09-26T08:00:00.000Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
    nullable: true,
  })
  name: string | null;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@gmail.com',
  })
  email: string;

  @Exclude()
  password: string;
}
