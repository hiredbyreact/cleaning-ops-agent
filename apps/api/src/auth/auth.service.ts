import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateUser(email: string, pass: string): boolean {
    return !!email && !!pass;
  }
}
