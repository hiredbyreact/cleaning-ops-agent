import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('login')
  login() {
    return { token: 'dummy-token' };
  }

  @Get('status')
  status() {
    return this.auth.status();
  }
}
