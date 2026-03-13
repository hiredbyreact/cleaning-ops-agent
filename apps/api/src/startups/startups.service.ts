import { Injectable } from '@nestjs/common';

@Injectable()
export class StartupsService {
  list() {
    return [{ id: 1, name: 'Demo Startup' }];
  }
}
