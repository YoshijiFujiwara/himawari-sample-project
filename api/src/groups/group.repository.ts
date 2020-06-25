import { EntityRepository, Repository } from 'typeorm';
import { GroupEntity } from './group.entity';
import { CreateGroupDto } from './dto/create-group.dto';
import { UserEntity } from '../auth/user.entity';

@EntityRepository(GroupEntity)
export class GroupRepository extends Repository<GroupEntity> {
  async createGroup(
    { name }: CreateGroupDto,
    user: UserEntity,
  ): Promise<GroupEntity> {
    const group = new GroupEntity();
    group.name = name;
    group.users = [user];
    await group.save();

    return group;
  }
}
