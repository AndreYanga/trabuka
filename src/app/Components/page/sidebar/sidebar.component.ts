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


  // Variável para controlar o tipo de acesso
tipoAcesso: string = 'estudante'; // Definido manualmente como 'estudante'
// Tipos de usuários disponíveis na plataforma Trabuka:
//   - estudante: Acessa o painel de estudante para testes/projetos
//   - empresa: Acessa o painel de empresa para gerenciar projetos e recrutamento
//   - administrador: Acessa o painel administrativo para gerenciar a plataforma
//   - gestor: Acessa o painel de gerenciamento para supervisão e relatórios
//   - agente_suporte: Acessa o painel de suporte técnico para tickets e base de conhecimento

}
