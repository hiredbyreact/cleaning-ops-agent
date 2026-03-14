import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { StartupsModule } from './startups/startups.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
@Module({ imports: [HealthModule, StartupsModule, AuthModule, ConfigModule] })
export class AppModule {}
