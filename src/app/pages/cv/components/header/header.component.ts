import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  toggleNavMenu() {
    const navMenu = document.getElementById('nav-menu') as HTMLElement;
    navMenu.classList.toggle('show');
  }
  hideNavMenu() {
    const navMenu = document.getElementById('nav-menu') as HTMLElement;
    navMenu.classList.remove('show');
  }
}
