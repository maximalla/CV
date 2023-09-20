import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/cv/components/header/header.component';
import { HomeComponent } from './pages/cv/components/home/home.component';
import { AboutComponent } from './pages/cv/components/about/about.component';
import { SkillsComponent } from './pages/cv/components/skills/skills.component';
import { ContactComponent } from './pages/cv/components/contact/contact.component';
import { FooterComponent } from './pages/cv/components/footer/footer.component';
import { EducationComponent } from './pages/cv/components/education/education.component';
import { ExperienceComponent } from './pages/cv/components/experience/experience.component';
import { ProjectsComponent } from './pages/cv/components/projects/projects.component';
import { CVComponent } from './pages/cv/cv.component';

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
    ExperienceComponent,
    ProjectsComponent,
    CVComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
