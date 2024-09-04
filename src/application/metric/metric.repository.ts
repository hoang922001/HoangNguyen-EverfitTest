import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
import { MetricModel } from 'src/infrastructure/typeorm/models/metric.model';
import { Between, FindOperator, Repository } from 'typeorm';
import { CreateMetricDto } from './dto/createMetric.dto';
import { GetListMetricParams } from './dto/getMetric.dto';

@Injectable()
export class MetricRepository {
  constructor(
    @InjectRepository(MetricModel)
    private readonly repository: Repository<MetricModel>,
  ) {}

  async createMetric(
    params: CreateMetricDto,
    userId: number,
  ): Promise<MetricModel> {
    const newMetric = this.repository.create({
      ...params,
      userId,
    });
    return await this.repository.save(newMetric);
  }

  async getListMetric(
    { type, period }: GetListMetricParams,
    userId: number,
  ): Promise<MetricModel[]> {
    let periodCondition: undefined | FindOperator<Date>;
    if (period) {
      const end = moment().endOf('day').toDate();
      const start = moment(end)
        .subtract(period, 'months')
        .startOf('month')
        .toDate();
      periodCondition = Between(start, end);
    }

    return await this.repository.findBy({
      type,
      date: periodCondition,
      userId,
    });
  }
}
