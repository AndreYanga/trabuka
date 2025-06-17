import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

// Variável para controlar o tipo de acesso
tipoAcesso: string = 'estudante'; // Definido manualmente como 'estudante'
// Tipos de usuários disponíveis na plataforma Trabuka:
//   - estudante: Acessa o painel de estudante para testes/projetos
//   - empresa: Acessa o painel de empresa para gerenciar projetos e recrutamento
//   - administrador: Acessa o painel administrativo para gerenciar a plataforma
//   - gestor: Acessa o painel de gerenciamento para supervisão e relatórios
//   - agente_suporte: Acessa o painel de suporte técnico para tickets e base de conhecimento

}
