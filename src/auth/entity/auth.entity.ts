import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty({
    description: 'The JWT access token',
  })
  accessToken: string;
}
