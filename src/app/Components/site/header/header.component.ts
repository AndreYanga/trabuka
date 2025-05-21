import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobileNavOpen = false;
  activeDropdown: string | null = null;

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
    this.closeMobileNav();
  }

  goToRegister() {
    this.router.navigate(['/register']);
    this.closeMobileNav();
  }

  goToEncontrarEstagio(){
    this.router.navigate(['/encontrar-estagios']);
    this.closeMobileNav();
  }

  goToHome() {
    this.router.navigate(['/']);
    this.closeMobileNav();
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    if (!this.isMobileNavOpen) {
      this.activeDropdown = null;
    }
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
    this.activeDropdown = null;
  }

  toggleDropdown(menu: string, event: Event) {
    event.stopPropagation();
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }
}
