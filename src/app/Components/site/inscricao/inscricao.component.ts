import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscricao',
  standalone: false,
  templateUrl: './inscricao.component.html',
  styleUrl: './inscricao.component.css'
})
export class InscricaoComponent {

  constructor(private router: Router) {}

  isMobileNavOpen = false;
  activeDropdown: string | null = null;

  goToLogin(){
    this.router.navigate(['/login']);
    this.closeMobileNav();
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
    this.activeDropdown = null;
  }

}
