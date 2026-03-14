import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login() {
    return { token: 'dummy-token' };
  }
}
