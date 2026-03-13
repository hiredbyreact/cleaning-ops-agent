import { Controller, Get } from '@nestjs/common';
import { StartupsService } from './startups.service';

@Controller('startups')
export class StartupsController {
  constructor(private readonly s: StartupsService) {}

  @Get()
  findAll() {
    return this.s.findAll();
  }
}
