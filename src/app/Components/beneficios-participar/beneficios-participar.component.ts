import { Component } from '@angular/core';

@Component({
  selector: 'app-beneficios-participar',
  standalone: false,
  templateUrl: './beneficios-participar.component.html',
  styleUrl: './beneficios-participar.component.css'
})
export class BeneficiosParticiparComponent {

  beneficios = [
    {
      icone: 'bx bx-code-alt',
      titulo: 'Experiência Prática',
      descricao: 'Participe de projetos simulados e reais, aplicando seus conhecimentos em tecnologia e design para resolver desafios do mercado.'
    },
    {
      icone: 'bx bx-check-circle',
      titulo: 'Certificação de Competências',
      descricao: 'Seus desempenhos são avaliados e certificados, validando suas habilidades para o mercado de trabalho.'
    },
    {
      icone: 'bx bx-briefcase',
      titulo: 'Inserção no Mercado',
      descricao: 'Progresse gradualmente com estágios remunerados, conectando-se a empresas e startups do setor tecnológico e criativo.'
    },
    {
      icone: 'bx bx-user-check',
      titulo: 'Acompanhamento de Mentores',
      descricao: 'Receba orientação contínua de mentores experientes, com feedbacks detalhados para sua evolução profissional.'
    },
    {
      icone: 'bx bx-folder-open',
      titulo: 'Portfólio Automatizado',
      descricao: 'Construa um portfólio com seus projetos concluídos, compartilhável com empregadores (links para GitHub, Figma, etc.).'
    },
    {
      icone: 'bx bx-money',
      titulo: 'Ganhos Financeiros',
      descricao: 'Receba 70–80% do valor dos projetos nos níveis 3 e 4, com pagamentos via Multicaixa.'
    },
    {
      icone: 'bx bx-group',
      titulo: 'Oportunidade de Mentoria',
      descricao: 'Ao alcançar o nível Mestre, você pode atuar como mentor em projetos simulados, desenvolvendo liderança.'
    },
    {
      icone: 'bx bx-star',
      titulo: 'Visibilidade para Empresas',
      descricao: 'Seu perfil é destacado para empresas, aumentando suas chances de contratação direta.'
    }
  ];

   ngOnInit() {
    // Rola a página para o topo ao carregar o componente
    window.scrollTo(0, 0);
  }
}
