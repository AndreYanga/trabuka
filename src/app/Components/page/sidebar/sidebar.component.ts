import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarActive: boolean = false;

  constructor(private router: Router) {}

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
    if (window.innerWidth <= 991) {
      this.isSidebarActive = false; // Fecha a sidebar após navegação em dispositivos móveis
    }
  }
}
