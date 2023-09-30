import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  trailerURL!: SafeResourceUrl;

  constructor(
    public readonly dataService: DataService,
    private filtersService: FiltersService,
    public readonly responseService: ResponseProcessService,
    private sanitizer: DomSanitizer,
  ) {}

  async ngOnInit(): Promise<void> {
    this.filtersService.popupId = this.movie.id;

    this.trailerURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      await this.responseService.responseTrailer(),
    );
    console.log(this.trailerURL);
  }
}
