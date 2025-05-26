import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

   isMobileNavOpen = false;
  activeDropdown: string | null = null;

  constructor(private router: Router) {}

  closeMobileNav() {
    this.isMobileNavOpen = false;
    this.activeDropdown = null;
  }
  
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
  goToEmpresas() {
    this.router.navigate(['/empresas']);
    this.closeMobileNav();
  }

  goToBeneficios() {
    this.router.navigate(['/beneficios-participar']);
    this.closeMobileNav();
  }



  goToSobreTrabuka() {
    this.router.navigate(['/sobre-trabuka']);
    this.closeMobileNav();
  }

  goToBlogue() {
    this.router.navigate(['/blogue']);
    this.closeMobileNav();
  }
}
