import { Injectable } from '@angular/core';
import { Weather } from '../interfaces/Weather';

@Injectable()
export class DataService {
  weathers: Weather[] = [];
  constructor() {}
}
