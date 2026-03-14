import { Injectable } from '@nestjs/common';
@Injectable()
export class AuthService {
  validateUser(email: string, password: string) {
    if (email && password) return { token: 'dummy-token', email };
    return null;
  }
}
