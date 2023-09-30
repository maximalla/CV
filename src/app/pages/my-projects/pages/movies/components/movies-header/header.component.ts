import { AfterViewInit, Component } from '@angular/core';
import { FiltersService } from '../../services/filters.service';
import { ResponseProcessService } from '../../services/response-process.service';

@Component({
  selector: 'app-movies-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class MoviesHeaderComponent implements AfterViewInit {
  title = '';
  year = '';

  inputsBlock!: HTMLElement;
  onInputsBlock!: HTMLElement;

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

  ngAfterViewInit(): void {
    this.inputsBlock = document.querySelector('.inputs') as HTMLElement;
    this.onInputsBlock = document.querySelector('.on-inputs') as HTMLElement;
  }
  showUp() {
    this.inputsBlock.style.display = 'flex';
    this.onInputsBlock.style.display = 'none';
  }
  hide() {
    if (window.innerWidth < 767) {
      this.inputsBlock.style.display = 'none';
      this.onInputsBlock.style.display = 'block';
    }
  }
}
