import { Injectable } from '@nestjs/common';
import { converter } from 'src/common/utils/converter';
import { CreateMetricDto } from './dto/createMetric.dto';
import { GetListMetricParams } from './dto/getMetric.dto';
import { MetricRepository } from './metric.repository';

@Injectable()
export class MetricService {
  constructor(private readonly metricRepo: MetricRepository) {}

  async createMetric(params: CreateMetricDto, userId: number) {
    return await this.metricRepo.createMetric(params, userId);
  }

  async getListMetric(params: GetListMetricParams, userId: number) {
    let listMetric = await this.metricRepo.getListMetric(params, userId);
    if (params.unit) {
      listMetric = listMetric.map((item) => ({
        ...item,
        unit: params.unit,
        value: converter(item.value, item.unit, params.unit),
      }));
    }

    return listMetric;
  }
}
