import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { StartupsModule } from './startups/startups.module';
import { ConfigModule } from './config/config.module';
@Module({
  imports: [HealthModule, AuthModule, StartupsModule, ConfigModule]
})
export class AppModule {}
