import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetGoalFilterDto {
  @ApiProperty({
    example: 1,
  })
  @IsNumber()
  id: number;
}
