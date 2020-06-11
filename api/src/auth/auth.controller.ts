import {
  Controller,
  ValidationPipe,
  Body,
  Post,
  Get,
  UseGuards,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { SignInUserDto } from './dto/sign-in-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AccessTokenSerializer } from './serializer/access-token.serializer';
import { UserSerializer } from './serializer/user.serializer';
import { GetUser } from './get-user-decorator';
import { UserEntity } from './user.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @ApiResponse({
    status: 201,
    description: 'ユーザー登録完了(メール送信)',
  })
  signUp(@Body(ValidationPipe) signUpUserDto: SignUpUserDto): Promise<void> {
    return this.authService.signUp(signUpUserDto);
  }

  @Post('/signin')
  @ApiResponse({
    status: 200,
    type: AccessTokenSerializer,
    description: 'ユーザーログイン完了',
  })
  signIn(
    @Body(ValidationPipe) signInUserDto: SignInUserDto,
  ): Promise<AccessTokenSerializer> {
    return this.authService.signIn(signInUserDto);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  @ApiResponse({
    status: 200,
    description: 'グーグルログイン',
  })
  googleLogin() {
    return;
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(@Req() req, @Res() res) {
    const jwt: string = await req.user.jwt;

    if (jwt) {
      res.redirect(
        `${process.env.CLIENT_URL}/users/signin_success?token=${jwt}`,
      );
    } else {
      res.redirect(`${process.env.CLIENT_URL}/users/signin_failure`);
    }
  }

  @Get('/email/verify/:token')
  @ApiResponse({
    status: 200,
    description: 'ユーザー本登録完了',
  })
  verifyEmail(@Param('token') token: string): Promise<void> {
    return this.authService.verifyEmail(token);
  }

  @Get('/me')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    type: UserSerializer,
    description: 'ログインユーザー自身の情報を取得',
  })
  me(@GetUser() user: UserEntity): UserSerializer {
    return user;
  }
}
