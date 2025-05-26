import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(private router: Router) {}

  isMobileNavOpen = false;
  activeDropdown: string | null = null;

  // Handle "Quero Estagiar" button click
  onApplyForInternship(): void {
    // Example: Navigate to an internship application page
    this.router.navigate(['/apply-internship']);
    // Alternatively, add logic for opening a modal or triggering an action
  }

  // Handle "Procurar Estagiários" button click
  onSearchInterns(): void {
    // Example: Navigate to a search interns page
    this.router.navigate(['/search-interns']);
    // Alternatively, add logic for filtering or searching interns
  }

  goToEmpresas() {
    this.router.navigate(['/empresas']);
    this.closeMobileNav();
  }

  goToEncontrarEstagio(){
    this.router.navigate(['/encontrar-estagios']);
    this.closeMobileNav();
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
    this.activeDropdown = null;
  }

}
