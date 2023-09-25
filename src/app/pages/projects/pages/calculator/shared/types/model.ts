import { CalculatorButtonsModel } from './calculator-buttons.model';
import { CalculatorValuesModel } from './calculator-values.model';

export class Model {
  static buttons: CalculatorButtonsModel;

  static values: CalculatorValuesModel;

  static init() {
    Model.buttons = new CalculatorButtonsModel();
    Model.values = new CalculatorValuesModel();
  }
}
