import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { MetricModule } from './application/metric/metric.module';
import { config } from './common/config/config';
import { TypeormConfig } from './infrastructure/typeorm/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeormConfig),
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    MetricModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
