import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/cv/components/header/header.component';
import { HomeComponent } from './pages/cv/components/home/home.component';
import { AboutComponent } from './pages/cv/components/about/about.component';
import { ProjectsComponent } from './pages/cv/components/projects/projects.component';
import { SkillsComponent } from './pages/cv/components/skills/skills.component';
import { ContactComponent } from './pages/cv/components/contact/contact.component';
import { FooterComponent } from './pages/cv/components/footer/footer.component';
import { EducationComponent } from './pages/cv/components/education/education.component';
import { CVComponent } from './pages/cv/cv.component';
import { ProjectHeaderComponent } from './pages/my-projects/components/project-header/project-header.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
import { CalculatorComponent } from './pages/my-projects/pages/calculator/calculator.component';
import { ButtonActionComponent } from './pages/my-projects/pages/calculator/components/button-action/button-action.component';
import { ButtonNumericComponent } from './pages/my-projects/pages/calculator/components/button-numeric/button-numeric.component';
import { ButtonOperationComponent } from './pages/my-projects/pages/calculator/components/button-operation/button-operation.component';
import { DisplayComponent } from './pages/my-projects/pages/calculator/components/display/display.component';
import { GeneralButtonComponent } from './pages/my-projects/pages/calculator/components/general-button/general-button.component';
import { DisplayPipe } from './pages/my-projects/pages/calculator/shared/display.pipe';
import { EnumsPipe } from './pages/my-projects/pages/calculator/shared/enums.pipe';
import { MovieComponent } from './pages/my-projects/pages/movies/components/movie/movie.component';
import { MoviesHeaderComponent } from './pages/my-projects/pages/movies/components/movies-header/header.component';
import { PaginatorComponent } from './pages/my-projects/pages/movies/components/paginator/paginator.component';
import { PopupComponent } from './pages/my-projects/pages/movies/components/popup/popup.component';
import { MoviesComponent } from './pages/my-projects/pages/movies/movies.component';
import { RateColorPipe } from './pages/my-projects/pages/movies/shared/rate-color.pipe';
import { GameBoardComponent } from './pages/my-projects/pages/snake/game-board/game-board.component';
import { SnakeComponent } from './pages/my-projects/pages/snake/snake.component';
import { AnalogClockComponent } from './pages/my-projects/pages/watches/components/analog-clock/analog-clock.component';
import { NumericComponent } from './pages/my-projects/pages/watches/components/digital-clock/components/numeric/numeric.component';
import { SeparatorComponent } from './pages/my-projects/pages/watches/components/digital-clock/components/separator/separator.component';
import { DigitalClockComponent } from './pages/my-projects/pages/watches/components/digital-clock/digital-clock.component';
import { WatchesComponent } from './pages/my-projects/pages/watches/watches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    EducationComponent,
    ProjectsComponent,
    CVComponent,

    // for calculator / movies / watches

    AppComponent,
    ProjectHeaderComponent,
    WatchesComponent,
    AnalogClockComponent,
    DigitalClockComponent,
    NumericComponent,
    SeparatorComponent,
    CalculatorComponent,
    DisplayComponent,
    ButtonActionComponent,
    ButtonNumericComponent,
    ButtonOperationComponent,
    GeneralButtonComponent,
    EnumsPipe,
    DisplayPipe,
    MoviesComponent,
    MoviesHeaderComponent,
    PaginatorComponent,
    PopupComponent,
    MovieComponent,
    RateColorPipe,
    SnakeComponent,

    // for snake
    GameBoardComponent,
    MyProjectsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,

    // for calculator / movies / watches
    FormsModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    DialogModule,
    PaginatorModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
