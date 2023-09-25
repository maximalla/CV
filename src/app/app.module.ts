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
import { SkillsComponent } from './pages/cv/components/skills/skills.component';
import { ContactComponent } from './pages/cv/components/contact/contact.component';
import { FooterComponent } from './pages/cv/components/footer/footer.component';
import { EducationComponent } from './pages/cv/components/education/education.component';
import { ProjectsComponent } from './pages/cv/components/projects/projects.component';
import { CVComponent } from './pages/cv/cv.component';
import { CalculatorComponent } from './pages/projects/pages/calculator/calculator.component';
import { ButtonActionComponent } from './pages/projects/pages/calculator/components/button-action/button-action.component';
import { ButtonNumericComponent } from './pages/projects/pages/calculator/components/button-numeric/button-numeric.component';
import { ButtonOperationComponent } from './pages/projects/pages/calculator/components/button-operation/button-operation.component';
import { DisplayComponent } from './pages/projects/pages/calculator/components/display/display.component';
import { GeneralButtonComponent } from './pages/projects/pages/calculator/components/general-button/general-button.component';
import { DisplayPipe } from './pages/projects/pages/calculator/shared/display.pipe';
import { EnumsPipe } from './pages/projects/pages/calculator/shared/enums.pipe';
import { MovieComponent } from './pages/projects/pages/movies/components/movie/movie.component';
import { MoviesHeaderComponent } from './pages/projects/pages/movies/components/movies-header/header.component';
import { PaginatorComponent } from './pages/projects/pages/movies/components/paginator/paginator.component';
import { PopupComponent } from './pages/projects/pages/movies/components/popup/popup.component';
import { MoviesComponent } from './pages/projects/pages/movies/movies.component';
import { RateColorPipe } from './pages/projects/pages/movies/shared/rate-color.pipe';
import { GameBoardComponent } from './pages/projects/pages/snake/game-board/game-board.component';
import { AnalogClockComponent } from './pages/projects/pages/watches/components/analog-clock/analog-clock.component';
import { NumericComponent } from './pages/projects/pages/watches/components/digital-clock/components/numeric/numeric.component';
import { SeparatorComponent } from './pages/projects/pages/watches/components/digital-clock/components/separator/separator.component';
import { DigitalClockComponent } from './pages/projects/pages/watches/components/digital-clock/digital-clock.component';
import { WatchesComponent } from './pages/projects/pages/watches/watches.component';
import { SnakeComponent } from './pages/projects/pages/snake/snake.component';

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
    HeaderComponent,
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
