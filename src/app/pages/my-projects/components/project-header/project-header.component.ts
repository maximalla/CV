import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.css'],
})
export class ProjectHeaderComponent implements AfterViewInit {
  navMenu!: HTMLElement;
  ngAfterViewInit(): void {
    this.navMenu = document.getElementById('navMenu') as HTMLElement;
  }
  toggleNavMenu() {
    this.navMenu.classList.toggle('show');
  }
  hideNavMenu() {
    this.navMenu.classList.remove('show');
  }
}
