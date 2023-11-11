import { Injectable } from '@angular/core';
import { Weather } from '../interfaces/Weather';
import { ApiService } from './api.service';
import { DataService } from './data.service';
@Injectable()
export class ResponseProcessService {
  constructor(
    private apiService: ApiService,
    private dataService: DataService,
  ) {}

  async responseDistributions(): Promise<void> {
    const data = await this.apiService.loadData();

    for (let i = 0; i < data.hourly.time.length; i++) {
      const weatherProperties: Weather = {
        time: data.hourly.time[i],
        temperature: data.hourly.temperature_2m[i],
        precipitationProbability: data.hourly.precipitation_probability[i],
        precipitation: data.hourly.precipitation[i],
        pressure: data.hourly.pressure_msl[i],
        cloudCover: data.hourly.cloudcover[i],
      };
      this.dataService.weathers.push(weatherProperties);
    }

    console.log(this.dataService.weathers);
  }
}
