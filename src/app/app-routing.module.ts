import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './pages/cv/cv.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { CalculatorComponent } from './pages/my-projects/pages/calculator/calculator.component';
import { MoviesComponent } from './pages/my-projects/pages/movies/movies.component';
import { SnakeComponent } from './pages/my-projects/pages/snake/snake.component';
import { TodoComponent } from './pages/my-projects/pages/todo/todo.component';
import { WatchesComponent } from './pages/my-projects/pages/watches/watches.component';

const routes: Routes = [
  { path: '', component: CVComponent },
  {
    path: 'projects',
    component: MyProjectsComponent,
    children: [
      { path: 'watches', component: WatchesComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'snake', component: SnakeComponent },
      { path: 'todo', component: TodoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
