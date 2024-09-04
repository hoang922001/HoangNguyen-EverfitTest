import { DistanceUnitEnum } from 'src/common/enum/DistanceUnit.enum';
import { MetricTypeEnum } from 'src/common/enum/MetricType.enum';
import { TemperatureUnitEnum } from 'src/common/enum/TemperatureUnit.enum';
import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

@Entity({ name: 'users' })
export class MetricModel extends BaseModel {
  @Column({
    type: 'enum',
    enum: MetricTypeEnum,
  })
  type!: MetricTypeEnum;

  @Column({
    type: 'varchar',
    length: 10,
  })
  unit!: DistanceUnitEnum | TemperatureUnitEnum;

  @Column({
    type: 'datetime',
  })
  date!: Date;

  @Column({
    type: 'float',
  })
  value!: number;

  @Column({
    name: 'user_id',
  })
  userId!: number;
}
