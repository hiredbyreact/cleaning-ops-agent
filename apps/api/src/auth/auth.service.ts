import { Injectable } from '@nestjs/common';
@Injectable()
export class AuthService {
  validateUser(username?: string, password?: string){
    // Placeholder simple auth; not secure
    if(username && password){
      return { token: 'dummy-token', user: { username } };
    }
    return { error: 'invalid' };
  }
}
