import { Injectable } from '@angular/core';
import { FiltersService } from './filters.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _baseUrl = 'https://api.themoviedb.org/3/';

  constructor(private filtersService: FiltersService) {}

  private get _genresUrl() {
    return (
      this._baseUrl + 'genre/movie/list' + this.filtersService.staticParams
    );
  }

  private get _moviesUrl() {
    const movie = this.filtersService.title ? `search/movie` : `discover/movie`;
    return this._baseUrl + movie + this.filtersService.toQuery;
  }

  private get _trailerUrl(): string {
    return (
      this._baseUrl +
      'movie/' +
      this.filtersService.popupId +
      '/videos' +
      this.filtersService.staticParams
    );
  }

  async loadData() {
    const response = await fetch(this._moviesUrl);
    return await response.json();
  }

  async loadGenres() {
    const response = await fetch(this._genresUrl);
    return await response.json();
  }

  async loadTrailer() {
    const response = await fetch(this._trailerUrl);
    return await response.json();
  }
}
