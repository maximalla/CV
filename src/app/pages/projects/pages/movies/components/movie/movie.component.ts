import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Movie } from '../../shared/interfaces/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() data!: Movie;
  genres!: string;

  constructor(public readonly dataService: DataService) {}

  ngOnInit(): void {
    this.genres = this.dataService.convertIdsToGenres(this.data.genreIds);
  }

  openPopup() {
    this.dataService.selectedMovie = this.data;
    this.dataService.popup = true;
    console.log(this.dataService.popup);
  }
}
