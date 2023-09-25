import { Component } from '@angular/core';
import { ActionEnum } from '../../shared/types/action.enum';
import { NumericEnum } from '../../shared/types/numeric.enum';
import { OperationEnum } from '../../shared/types/operation.enum';

@Component({
  selector: 'app-general-button',
  templateUrl: './general-button.component.html',
  styleUrls: ['./general-button.component.css'],
})
export class GeneralButtonComponent {
  ActionEnum = ActionEnum;
  NumericEnum = NumericEnum;
  OperationEnum = OperationEnum;
}
