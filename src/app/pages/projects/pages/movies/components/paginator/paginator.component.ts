import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { DataService } from '../../services/data.service';
import { FiltersService } from '../../services/filters.service';
import { ResponseProcessService } from '../../services/response-process.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  constructor(
    public dataService: DataService,
    public filtersService: FiltersService,
    private responseProcessService: ResponseProcessService,
  ) {}

  onPageChange(event: PaginatorState) {
    this.filtersService.page = (event.first as number) + 1;
    this.responseProcessService
      .responseDistributions()
      .then()
      .catch((error) => {
        console.error('Сталася помилка:', error);
      });
  }
}
