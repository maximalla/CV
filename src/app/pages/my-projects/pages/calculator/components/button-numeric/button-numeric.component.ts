import { Component, Input } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-button-numeric',
  templateUrl: 'button-numeric.component.html',
  styleUrls: [
    '../../shared/base-button.style.css',
    './button-numeric.component.css',
  ],
})
export class ButtonNumericComponent {
  @Input() label!: string;
  private inputRegExp = new RegExp('[^0-9.\\-]');

  constructor(private dataService: DataService) {}

  onButtonClick() {
    this.updateCurrentValue();
  }

  private invalidInput() {
    return this.inputRegExp.test(this.dataService.values.currentOperandValue);
  }

  private updateCurrentValue() {
    const { values } = this.dataService;

    if (this.invalidInput()) values.currentOperandValue = '0';
    if (values.currentOperandValue.length > 8) return;

    if (this.label === '.') {
      if (values.currentOperandValue.includes('.')) return;
      if (values.currentOperandValue === '') values.currentOperandValue = '0';
    }

    if (values.currentOperandValue === '0' && this.label != '.')
      values.currentOperandValue = this.label;
    else values.currentOperandValue = values.currentOperandValue + this.label;
  }
}
