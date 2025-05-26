import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-para-empresas',
  standalone: false,
  templateUrl: './para-empresas.component.html',
  styleUrl: './para-empresas.component.css'
})
export class ParaEmpresasComponent {

constructor(private router: Router) {}

  isMobileNavOpen = false;
  activeDropdown: string | null = null;

  goToEmpresas() {
    this.router.navigate(['/empresas']);
    this.closeMobileNav();
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
    this.activeDropdown = null;
  }
}
