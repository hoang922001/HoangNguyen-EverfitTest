import { IsDateString, IsEnum, IsNumber } from 'class-validator';
import { DistanceUnitEnum } from 'src/common/enum/DistanceUnit.enum';
import { MetricTypeEnum } from 'src/common/enum/MetricType.enum';
import { TemperatureUnitEnum } from 'src/common/enum/TemperatureUnit.enum';
import { IsValidUnit } from 'src/common/validation/unitMetric.validation';

export class CreateMetricDto {
  @IsEnum(MetricTypeEnum)
  type!: MetricTypeEnum;

  @IsValidUnit()
  unit!: DistanceUnitEnum | TemperatureUnitEnum;

  @IsDateString()
  date!: Date;

  @IsNumber()
  value!: number;
}
