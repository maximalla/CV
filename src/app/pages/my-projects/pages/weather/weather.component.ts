import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { DataService } from './services/data.service';
import { ResponseProcessService } from './services/response-process.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [ApiService, DataService, ResponseProcessService],
})
export class WeatherComponent implements OnInit {
  activeIndex: number = 0;

  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({
    title: 'Title',
    content: 'Content',
  }));
  constructor(
    public readonly dataService: DataService,
    private readonly responseProcessService: ResponseProcessService,
  ) {}

  ngOnInit(): void {
    this.responseProcessService.responseDistributions();
  }
}
