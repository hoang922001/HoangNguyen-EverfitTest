import * as Convert from 'convert-units';
import { DistanceUnitEnum } from '../enum/DistanceUnit.enum';
import { TemperatureUnitEnum } from './../enum/TemperatureUnit.enum';

export const converter = (
  value: number,
  from: TemperatureUnitEnum | DistanceUnitEnum,
  to: TemperatureUnitEnum | DistanceUnitEnum,
) => {
  return Convert(value).from(from).to(to);
};
