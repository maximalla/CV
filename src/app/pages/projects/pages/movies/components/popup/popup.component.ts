import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  movie = this.dataService.selectedMovie;
  genres = this.dataService.convertIdsToGenres(
    this.dataService.selectedMovie.genreIds,
  );

  constructor(public readonly dataService: DataService) {}
}
