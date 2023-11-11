import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  private _url =
    'https://api.open-meteo.com/v1/forecast?latitude=48.5243&longitude=23.5009&hourly=temperature_2m,precipitation_probability,precipitation,pressure_msl,cloudcover';
  constructor() {}

  async loadData() {
    const response = await fetch(this._url);
    return await response.json();
  }
}
