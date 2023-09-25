import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActionEnum } from '../../shared/types/action.enum';

@Component({
  selector: 'app-button-action',
  templateUrl: 'button-action.component.html',
  styleUrls: [
    '../../shared/base-button.style.css',
    './button-action.component.css',
  ],
})
export class ButtonActionComponent {
  @Input() label!: string;

  constructor(private dataService: DataService) {}

  onButtonClick() {
    switch (this.label) {
      case ActionEnum.Clear:
        this.dataService.values.clearAll();
        break;
      case ActionEnum.Backspace:
        this.dataService.values.backspace();
        break;
      case ActionEnum.Percent:
        this.dataService.values.percent();
        break;
      case ActionEnum.Negative:
        this.dataService.values.negateNumber();
        break;
      case ActionEnum.Equal:
        this.dataService.values.equal();
    }
  }
}
