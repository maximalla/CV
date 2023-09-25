import { Injectable } from '@angular/core';
import { Clock } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private _currentTime: Clock = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  private interval!: ReturnType<typeof setInterval>;

  get currentTime(): Clock {
    return this._currentTime;
  }

  private get getTime(): Clock {
    const currentDate = new Date();
    return {
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds(),
    };
  }

  public startClock() {
    this._currentTime = this.getTime;
    this.interval = setInterval(() => (this._currentTime = this.getTime), 1000);
  }

  public stopClock() {
    clearInterval(this.interval);
  }
}
