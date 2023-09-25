import { OperationEnum } from './operation.enum';

export class CalculatorValuesModel {
  private _first = '0';
  private _second = '';
  private _operator = '';

  get first() {
    return this._first;
  }

  get second() {
    return this._second;
  }

  get operator() {
    return this._operator;
  }

  set operator(operator) {
    this._operator = operator;
  }

  get displayValue() {
    return this._first + ' ' + this._operator + ' ' + this._second;
  }

  get currentOperandValue() {
    return this._operator ? this._second : this._first;
  }

  set currentOperandValue(value) {
    if (this._operator) this._second = value;
    else this._first = value;
  }

  equal() {
    if (!this.operator) return;

    if (this.second !== '') {
      const first = parseFloat(this.first);
      const second = parseFloat(this.second);

      switch (this.operator) {
        case OperationEnum.Plus:
          this._first = String(first + second);
          break;
        case OperationEnum.Minus:
          this._first = String(first - second);
          break;
        case OperationEnum.Multiply:
          this._first = String(first * second);
          break;
        case OperationEnum.Divide:
          if (second === 0) this._first = `You can't divide by zero!`;
          else this._first = String(first / second);
          break;
        default:
          throw new Error(`Can't find operator "${this.operator}"`);
      }
      this.convertResult();
      this._second = '';
      this._operator = '';
    }
  }

  clearAll() {
    this._first = '0';
    this._second = '';
    this._operator = '';
  }

  backspace() {
    if (this.second !== '') {
      this._second = this.second.slice(0, -1);
    } else if (this.operator !== '') {
      this._operator = '';
    } else {
      if (this.invalidNumber()) this._first = '0';
      this._first = this.first.slice(0, -1);
      if (this.first === '') this._first = '0';
    }
  }

  percent() {
    if (this.second !== '')
      this._second = String(parseFloat(this.second) / 100);
    else {
      this._first = String(parseFloat(this.first) / 100);
      this._operator = '';
    }
  }

  negateNumber() {
    if (this.operator)
      this._second =
        this.second !== '' ? String(parseFloat(this.second) * -1) : '';
    else this._first = String(parseFloat(this.first) * -1);
  }

  private invalidNumber() {
    return /[^0-9.\-e+]/.test(this.first);
  }

  private convertResult() {
    if (this.first === "You can't divide by zero!") return;
    const buffer = this.first
      .toLocaleString()
      .replace(',', '.')
      .replace(new RegExp(' ', 'g'), '');
    this._first =
      buffer.length > 10 ? Number(buffer).toExponential(3).toString() : buffer;
  }
}
