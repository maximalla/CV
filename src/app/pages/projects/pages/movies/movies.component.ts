import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { ResponseProcessService } from './services/response-process.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  constructor(
    public dataService: DataService,
    private responseProcessService: ResponseProcessService,
  ) {
    responseProcessService
      .saveAndProcessGenres()
      .then(() => console.log(dataService.genres))
      .catch((error) => {
        console.error('Сталася помилка:', error);
      });
    responseProcessService
      .responseDistributions()
      .then()
      .catch((error) => {
        console.error('Сталася помилка:', error);
      });
  }
}
