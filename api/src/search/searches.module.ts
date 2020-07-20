import { Module } from '@nestjs/common';
import { SearchesController } from './searches.controller';
import { SearchesService } from './searches.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupRepository } from '../groups/group.repository';
import { GoalRepository } from '../goals/goal.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([GroupRepository]),
    TypeOrmModule.forFeature([GoalRepository]),
  ],
  controllers: [SearchesController],
  providers: [SearchesService],
})
export class SearchesModule {}
