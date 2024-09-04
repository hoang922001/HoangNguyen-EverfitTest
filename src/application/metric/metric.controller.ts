import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthorizeGuard } from 'src/common/guard/authorize.guard';
import { RequestWithUser } from 'src/common/types/request.type';
import { CreateMetricDto } from './dto/createMetric.dto';
import { GetListMetricParams } from './dto/getMetric.dto';
import { MetricService } from './metric.service';

@Controller('/api/v1/metric')
export class MetricController {
  constructor(private readonly metricService: MetricService) {}

  @Post()
  @UseGuards(AuthorizeGuard)
  async createMetric(
    @Body() params: CreateMetricDto,
    @Req() req: RequestWithUser,
  ) {
    return await this.metricService.createMetric(params, req.user.id);
  }

  @Get()
  @UseGuards(AuthorizeGuard)
  async getListMetric(
    @Query() params: GetListMetricParams,
    @Req() req: RequestWithUser,
  ) {
    return await this.metricService.getListMetric(params, req.user.id);
  }
}
