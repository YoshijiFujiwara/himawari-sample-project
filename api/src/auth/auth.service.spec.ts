import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';

const mockUserRepository = () => ({
  createUser: jest.fn(),
});
const mockJwtService = () => ({});
const mockMailerService = () => ({});

describe('AuthService', () => {
  let authService;
  let userRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UserRepository, useFactory: mockUserRepository },
        { provide: JwtService, useFactory: mockJwtService },
        { provide: MailerService, useFactory: mockMailerService },
      ],
    }).compile();

    authService = await module.get<AuthService>(AuthService);
    userRepository = await module.get<UserRepository>(UserRepository);
  });

  describe('signUp', () => {
    it('userRepositoryを通して、ユーザーを新規作成できる', async () => {
      userRepository.createUser.mockResolvedValue(undefined);
      jest
        .spyOn(authService, 'sendAuthenticationEmail')
        .mockImplementation(() => Promise.resolve(undefined));

      expect(userRepository.createUser).not.toHaveBeenCalled();
      const signUpUserDto: SignUpUserDto = {
        username: '田中太郎',
        email: 'tanaka@example.com',
        password: 'testtest',
      };
      const result = await authService.signUp(signUpUserDto);
      expect(userRepository.createUser).toHaveBeenCalled();
      expect(result).toEqual(undefined);
    });
  });
});
