import { Controller, Get } from '@nestjs/common';
import { StartupsService } from './startups.service';
@Controller('startups')
export class StartupsController { constructor(private readonly svc: StartupsService){} @Get() list(){ return this.svc.findAll(); } }
