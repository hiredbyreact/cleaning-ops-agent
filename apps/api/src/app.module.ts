import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { StartupsModule } from './startups/startups.module';

@Module({
  imports: [ConfigModule.forRoot(), HealthModule, AuthModule, StartupsModule],
})
export class AppModule {}
