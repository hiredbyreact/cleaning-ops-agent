import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('login')
  login(@Body() body: any) {
    return { token: 'demo-token', user: body?.email };
  }

  @Get('status')
  status() {
    return { ok: true };
  }
}
