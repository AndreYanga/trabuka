import { Component } from '@angular/core';

@Component({
  selector: 'app-encontrar-estagios',
  standalone: false,
  templateUrl: './encontrar-estagios.component.html',
  styleUrl: './encontrar-estagios.component.css',
})
export class EncontrarEstagiosComponent {
  projetos = [
    { id: 1, titulo: 'Desenvolvimento de Landing Page', empresa: 'TechStart', nivel: 'Praticante', prazo: '10/06/2025', status: ' pendente' },
    { id: 2, titulo: 'App Móvel para Gestão', empresa: 'InnoDesign', nivel: 'Construtor', prazo: '15/06/2025', status: ' ativo' },
    { id: 3, titulo: 'App Móvel para Gestão', empresa: 'InnoDesign', nivel: 'Construtor', prazo: '15/06/2025', status: ' ativo' },
    { id: 4, titulo: 'Design UI/UX para E-commerce', empresa: 'CreativeHub', nivel: 'Mestre', prazo: '20/06/2025', status: ' concluído' },
  ];

  filtroNivel: string = '';
  filtroArea: string = '';

  filtrarProjetos() {
    return this.projetos.filter(projeto => {
      const nivelMatch = !this.filtroNivel || projeto.nivel === this.filtroNivel;
      const areaMatch = !this.filtroArea || (projeto.titulo.toLowerCase().includes(this.filtroArea.toLowerCase()) || projeto.empresa.toLowerCase().includes(this.filtroArea.toLowerCase()));
      return nivelMatch && areaMatch;
    });
  }

  candidatar(projetoId: number) {
    alert(`Candidatura enviada para o projeto ID ${projetoId}!`);
    // Lógica para enviar candidatura (ex.: chamar serviço API)
  }

   ngOnInit() {
    // Rola a página para o topo ao carregar o componente
    window.scrollTo(0, 0);
  }
 }
