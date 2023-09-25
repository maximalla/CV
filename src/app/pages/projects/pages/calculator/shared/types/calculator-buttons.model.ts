import { ActionEnum } from './action.enum';
import { NumericEnum } from './numeric.enum';
import { OperationEnum } from './operation.enum';

export class CalculatorButtonsModel {
  private _correctOrder = [
    ActionEnum.Clear,
    ActionEnum.Backspace,
    ActionEnum.Percent,
    OperationEnum.Divide,
    NumericEnum.Seven,
    NumericEnum.Eight,
    NumericEnum.Nine,
    OperationEnum.Multiply,
    NumericEnum.Four,
    NumericEnum.Five,
    NumericEnum.Six,
    OperationEnum.Minus,
    NumericEnum.One,
    NumericEnum.Two,
    NumericEnum.Three,
    OperationEnum.Plus,
    ActionEnum.Negative,
    NumericEnum.Zero,
    NumericEnum.Dot,
    ActionEnum.Equal,
  ];
  get correctOrder() {
    return this._correctOrder;
  }
}
