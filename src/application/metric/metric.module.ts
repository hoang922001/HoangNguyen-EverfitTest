import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetricModel } from 'src/infrastructure/typeorm/models/metric.model';
import { MetricController } from './metric.controller';
import { MetricRepository } from './metric.repository';
import { MetricService } from './metric.service';

@Module({
  imports: [TypeOrmModule.forFeature([MetricModel])],
  providers: [MetricRepository, MetricService],
  controllers: [MetricController],
})
export class MetricModule {}
