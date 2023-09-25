import { Pipe, PipeTransform } from '@angular/core';
import { ActionEnum } from './types/action.enum';
import { NumericEnum } from './types/numeric.enum';
import { OperationEnum } from './types/operation.enum';

@Pipe({
  name: 'enums',
})
export class EnumsPipe implements PipeTransform {
  transform(
    label: ActionEnum | NumericEnum | OperationEnum,
    buttonType: 'action' | 'numeric' | 'operation',
  ): boolean {
    if (buttonType === 'action') {
      return Object.values(ActionEnum).includes(label as ActionEnum);
    }
    if (buttonType === 'numeric') {
      return Object.values(NumericEnum).includes(label as NumericEnum);
    }
    if (buttonType === 'operation') {
      return Object.values(OperationEnum).includes(label as OperationEnum);
    }
    return false;
  }
}
