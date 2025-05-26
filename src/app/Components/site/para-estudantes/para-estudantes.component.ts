import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-para-estudantes',
  standalone: false,
  templateUrl: './para-estudantes.component.html',
  styleUrl: './para-estudantes.component.css'
})
export class ParaEstudantesComponent {

constructor(private router: Router) {}

  isMobileNavOpen = false;
  activeDropdown: string | null = null;

  goToEncontrarEstagio(){
    this.router.navigate(['/encontrar-estagios']);
    this.closeMobileNav();
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
    this.activeDropdown = null;
  }
}
