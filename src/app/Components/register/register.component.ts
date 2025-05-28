import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  role: string | null = null; // 'cliente' ou 'freelancer'
  isFormVisible: boolean = false;

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  goTologin() {
    this.router.navigate(['/login']);
  }

  selectRole(role: string) {
    this.role = role;
  }

  showForm() {
    if (this.role) {
      this.isFormVisible = true;
    }
  }
}
