import { Injectable } from '@angular/core';
import { Genre } from '../shared/interfaces/genre';
import { Movie } from '../shared/interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  movies!: [Movie];
  selectedMovie!: Movie;
  popup = false;
  private _totalPages!: number;
  private _totalCount!: number;
  private _itemsPerPage: number = 20;
  private _genres!: [Genre];

  get totalPages(): number {
    return this._totalPages;
  }

  set totalPages(value: number) {
    this._totalPages = value > 500 ? 500 : value;
  }

  get totalCount(): number {
    return this._totalCount;
  }

  set totalCount(value: number) {
    this._totalCount = value;
  }

  get itemsPerPage(): number {
    return this._itemsPerPage;
  }

  set itemsPerPage(value: number) {
    this._itemsPerPage = value;
  }

  get genres(): [Genre] {
    return this._genres;
  }

  set genres(value: [Genre]) {
    this._genres = value;
  }

  convertIdsToGenres(genreIds: number[]) {
    return genreIds.map((id: number) => this._genres[id]).join(', ');
  }
}
