import { ApiProperty } from '@nestjs/swagger';
export class CommitsSummary {
  @ApiProperty({
    example: '2020-06',
  })
  createdAt: string;

  @ApiProperty({
    example: 3,
  })
  count: number;
}
