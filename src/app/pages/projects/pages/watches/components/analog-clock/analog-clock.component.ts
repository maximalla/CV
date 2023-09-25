import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css'],
})
export class AnalogClockComponent implements OnDestroy, AfterViewInit {
  constructor(public dateService: DateService) {}

  ngAfterViewInit(): void {
    this.dateService.startClock();
  }

  ngOnDestroy(): void {
    this.dateService.stopClock();
  }
}
