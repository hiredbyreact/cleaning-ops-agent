import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { StartupModule } from './startups/startups.module';
@Module({
  imports:[HealthModule, AuthModule, ConfigModule, StartupModule],
})
export class AppModule {}
