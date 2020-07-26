import { Injectable } from '@nestjs/common';
import { UserEntity } from '../auth/user.entity';
import { GoalEntity } from '../goals/goal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GoalRepository } from '../goals/goal.repository';
import { GroupRepository } from '../groups/group.repository';
import { GoalLabelEnum } from '../goals/goal-label.enum';
import { UserRepository } from '../auth/user.repository';
import { SearchDto } from './dto/search.dto';

@Injectable()
export class SearchesService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @InjectRepository(GroupRepository)
    private groupRepository: GroupRepository,
    @InjectRepository(GoalRepository)
    private goalRepository: GoalRepository,
  ) {}

  async searchInGroupRelatedUsers(
    user: UserEntity,
  ): Promise<{ users: UserEntity[]; goals: GoalEntity[] }> {
    const groups = await this.groupRepository.getGroupsUserMemberOf(user);

    // 同じグループのユーザーを取得
    const allUsers: UserEntity[] =
      groups.length !== 0
        ? [].concat(...groups.map(group => group.users))
        : [user];
    const uniqueUsers = allUsers.filter(
      (filteringUser, index) =>
        allUsers.findIndex(u => u.id === filteringUser.id) === index,
    );

    const goals = await this.goalRepository
      .createQueryBuilder('goal')
      .where('goal.user_id IN (:users)', {
        users: uniqueUsers.map(uu => uu.id),
      })
      .andWhere('goal.isPublic = true')
      .orWhere('goal.user_id = :userId', { userId: user.id })
      .leftJoinAndSelect('goal.user', 'user') // ユーザーネームも一応欲しいため
      .getMany();

    return {
      users: uniqueUsers,
      goals,
    };
  }

  async getUsers({ keyword }: SearchDto): Promise<UserEntity[]> {
    return await this.userRepository
      .createQueryBuilder('user')
      .where('user.username LIKE :name', { name: `%${keyword}%` })
      .getMany();
  }

  async getGoals(user: UserEntity): Promise<GoalEntity[]> {
    const goals = [];

    for (let index = 0; index < 100; index++) {
      const newGoal = new GoalEntity();
      newGoal.id = index;
      newGoal.title = `目標${index}`;
      newGoal.description = 'fugafuga';
      newGoal.label = [
        GoalLabelEnum.CHALLENGING,
        GoalLabelEnum.ACHIEVEMENT,
        GoalLabelEnum.GIVE_UP,
      ][index % 3];
      newGoal.isPublic = false;
      newGoal.userId = 1;
      newGoal.user = user;
      delete newGoal.user.groups;
      newGoal.lastCommitedAt = new Date();
      newGoal.createdAt = new Date();
      goals.push(newGoal);
    }

    return goals;
  }
}
