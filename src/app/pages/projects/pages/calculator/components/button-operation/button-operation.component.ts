import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-button-operation',
  templateUrl: 'button-operation.component.html',
  styleUrls: [
    '../../shared/base-button.style.css',
    './button-operation.component.css',
  ],
})
export class ButtonOperationComponent {
  @Input() label!: string;

  constructor(private dataService: DataService) {}

  onButtonClick() {
    this.setOperator();
  }

  private invalidNumber() {
    return /[^0-9.\-e+]/.test(this.dataService.values.first);
  }

  private setOperator() {
    if (!this.dataService.values.first) {
      this.dataService.values.currentOperandValue = '0';
      this.dataService.values.operator = this.label;
      return;
    }

    if (!this.dataService.values.second) {
      if (this.invalidNumber()) {
        this.dataService.values.currentOperandValue = '0';
        return;
      }

      if (
        this.dataService.values.first[
          this.dataService.values.first.length - 1
        ] === '.'
      )
        this.dataService.values.currentOperandValue =
          this.dataService.values.first.slice(0, -1);

      this.dataService.values.operator = this.label;
    } else {
      this.dataService.values.equal();
      this.setOperator();
    }
  }
}
