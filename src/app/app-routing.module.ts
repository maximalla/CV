import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './pages/cv/cv.component';
import { CalculatorComponent } from './pages/projects/pages/calculator/calculator.component';
import { MoviesComponent } from './pages/projects/pages/movies/movies.component';
import { SnakeComponent } from './pages/projects/pages/snake/snake.component';
import { WatchesComponent } from './pages/projects/pages/watches/watches.component';

const routes: Routes = [
  { path: '', component: CVComponent },
  { path: 'watches', component: WatchesComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'snake', component: SnakeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
