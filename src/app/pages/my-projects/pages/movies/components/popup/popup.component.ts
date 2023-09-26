import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { FiltersService } from '../../services/filters.service';
import { ResponseProcessService } from '../../services/response-process.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  movie = this.dataService.selectedMovie;
  genres = this.dataService.convertIdsToGenres(
    this.dataService.selectedMovie.genreIds,
  );
  trailerURL!: string;

  constructor(
    public readonly dataService: DataService,
    private filtersService: FiltersService,
    public readonly responseService: ResponseProcessService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.filtersService.popupId = this.movie.id;
    this.trailerURL = await this.responseService.responseTrailer();
    console.log(this.trailerURL);
  }
}
