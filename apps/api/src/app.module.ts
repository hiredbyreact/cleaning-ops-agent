import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { StartupsModule } from './startups/startups.module';

@Module({
  imports: [HealthModule, StartupsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
