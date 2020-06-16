import { Controller, UseGuards, Post, Body, Get, Param } from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { GoalsService } from './goals.service';
import { GetUser } from '../auth/get-user-decorator';
import { UserEntity } from '../auth/user.entity';
import { CreateGoalDto } from './dto/create-goal.dto';
import { GoalSerializer } from './serializer/goal.serializer';
import { GetGoalFilterDto } from './dto/get-goal-filter.dto';

@ApiTags('goals')
@Controller('goals')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class GoalsController {
  constructor(private goalsService: GoalsService) {}

  @Post()
  @ApiCreatedResponse({
    description: '目標の作成',
  })
  createGoals(
    @Body() createGoalDto: CreateGoalDto,
    @GetUser() user: UserEntity,
  ): Promise<GoalSerializer> {
    return this.goalsService.createGoal(createGoalDto, user);
  }

  @Get(':id')
  @ApiOkResponse({
    description: '目標の詳細取得',
  })
  getGoal(
    @Param('id') getGoalFilterDto: GetGoalFilterDto,
  ): Promise<GoalSerializer> {
    return this.goalsService.getGoal(getGoalFilterDto);
  }
}
