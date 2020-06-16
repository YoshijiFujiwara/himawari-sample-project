import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoalRepository } from './goal.repository';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UserEntity } from '../auth/user.entity';
import { GoalSerializer } from './serializer/goal.serializer';
import { GetGoalFilterDto } from './dto/get-goal-filter.dto';

@Injectable()
export class GoalsService {
  constructor(
    @InjectRepository(GoalRepository)
    private goalRepository: GoalRepository,
  ) {}

  async createGoal(
    createGoalDto: CreateGoalDto,
    user: UserEntity,
  ): Promise<GoalSerializer> {
    const goal = await this.goalRepository.createGoal(createGoalDto, user);

    return goal.transformToSerializer();
  }

  async getGoal({ id }: GetGoalFilterDto): Promise<GoalSerializer> {
    const goal = await this.goalRepository.findOne({ id });
    if (goal) {
      return goal.transformToSerializer();
    }

    throw new NotFoundException('存在しないIDです');
  }
}
