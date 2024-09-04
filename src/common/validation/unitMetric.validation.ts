import { BadRequestException } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { DistanceUnitEnum } from '../enum/DistanceUnit.enum';
import { MetricTypeEnum } from '../enum/MetricType.enum';
import { TemperatureUnitEnum } from '../enum/TemperatureUnit.enum';

export function IsValidUnit(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isValidUnit',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string, validationArguments: ValidationArguments) {
          const type = validationArguments.object['type'] as MetricTypeEnum;
          if (!type) throw new BadRequestException('Type is missing!');

          let isValid = false;

          if (type === MetricTypeEnum.DISTANCE)
            isValid = Object.values(DistanceUnitEnum).includes(
              value as DistanceUnitEnum,
            );

          if (type === MetricTypeEnum.TEMPERATURE)
            isValid = Object.values(TemperatureUnitEnum).includes(
              value as TemperatureUnitEnum,
            );

          return isValid;
        },
        defaultMessage: (args: ValidationArguments) => {
          const type = args.object['type'] as MetricTypeEnum;
          let validUnit: string[] = [];

          if (type === MetricTypeEnum.DISTANCE)
            validUnit = Object.values(DistanceUnitEnum);

          if (type === MetricTypeEnum.TEMPERATURE)
            validUnit = Object.values(TemperatureUnitEnum);

          return `Please provide valid unit: ${validUnit.join(', ')}`;
        },
      },
    });
  };
}
