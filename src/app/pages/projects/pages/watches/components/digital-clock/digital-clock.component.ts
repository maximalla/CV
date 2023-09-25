import { Component, OnDestroy, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';
import { Clock } from '../../shared/interfaces';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css'],
})
export class DigitalClockComponent implements OnInit, OnDestroy {
  interval: any;

  clock: Clock = { hours: 0, minutes: 0, seconds: 0 };

  constructor(public dateService: DateService) {}

  ngOnInit(): void {
    this.dateService.startClock();
  }

  ngOnDestroy(): void {
    this.dateService.stopClock();
  }
}
