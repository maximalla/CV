import { Component } from '@angular/core';
import { FiltersService } from '../../services/filters.service';
import { ResponseProcessService } from '../../services/response-process.service';

@Component({
  selector: 'app-movies-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class MoviesHeaderComponent {
  title = '';
  year = '';

  constructor(
    private filtersService: FiltersService,
    private responseProcessService: ResponseProcessService,
  ) {}

  search() {
    this.filtersService.title = this.title;
    this.filtersService.year = this.year;
    this.filtersService.page = 1;
    console.log('year: ', this.filtersService.year);
    console.log('name: ', this.filtersService.year);
    this.responseProcessService
      .responseDistributions()
      .then()
      .catch((error) => {
        console.error('Сталася помилка:', error);
      });
  }
}
