import { IsEnum, IsNumberString, IsOptional } from 'class-validator';
import { DistanceUnitEnum } from 'src/common/enum/DistanceUnit.enum';
import { MetricTypeEnum } from 'src/common/enum/MetricType.enum';
import { TemperatureUnitEnum } from 'src/common/enum/TemperatureUnit.enum';
import { IsValidUnit } from 'src/common/validation/unitMetric.validation';

export class GetListMetricParams {
  @IsEnum(MetricTypeEnum)
  type!: MetricTypeEnum;

  @IsOptional()
  @IsNumberString()
  period?: number;

  @IsOptional()
  @IsValidUnit()
  unit?: TemperatureUnitEnum | DistanceUnitEnum;
}
