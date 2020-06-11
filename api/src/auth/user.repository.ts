import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { SignInUserDto } from './dto/sign-in-user.dto';
import * as bcrypt from 'bcrypt';
import {
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(signUpUserDto: SignUpUserDto): Promise<void> {
    const { username, email, password } = signUpUserDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserEntity();
    user.username = username;
    user.email = email;
    user.password = hashedPassword;
    try {
      await user.save();
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('ユーザー名またはパスワードが違います');
      }

      throw new InternalServerErrorException();
    }
  }

  async validatePassword(signInUserDto: SignInUserDto): Promise<string> {
    const { username, email, password } = signInUserDto;

    if ((!username && !email) || !password) {
      return null;
    }

    const user = username
      ? await this.findOne({ username })
      : await this.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user.username;
    }

    return null;
  }
}
