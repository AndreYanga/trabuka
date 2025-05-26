import { Component } from '@angular/core';

@Component({
  selector: 'app-para-empresas',
  standalone: false,
  templateUrl: './para-empresas.component.html',
  styleUrl: './para-empresas.component.css'
})
export class ParaEmpresasComponent {

  beneficios = [
    {
      icone: 'bx bx-filter-alt',
      titulo: 'Apenas Candidatos Alinhados',
      descricao: 'A Trabuka garante que apenas estagiários e profissionais compatíveis com os requisitos do projeto se candidatem.'
    },
    {
      icone: 'bx bx-time-five',
      titulo: 'Economize Tempo e Energia',
      descricao: 'Ferramentas como chat interno, fluxo de candidatos, testes voluntários e notificações otimizam seu processo seletivo.'
    },
    {
      icone: 'bx bx-user-check',
      titulo: 'Acesso a Talentos Qualificados',
      descricao: 'Conecte-se a estagiários e profissionais (níveis Praticante a Mestre) com competências avaliadas e certificadas.'
    },
    {
      icone: 'bx bx-group',
      titulo: 'Projetos Supervisionados',
      descricao: 'Mentores (nível Mestre) podem supervisionar projetos, garantindo entregas de alta qualidade.'
    },
    {
      icone: 'bx bx-folder-open',
      titulo: 'Portfólios Verificados',
      descricao: 'Visualize portfólios automatizados dos candidatos, com links para projetos reais (GitHub, Figma, etc.).'
    },
    {
      icone: 'bx bx-briefcase',
      titulo: 'Contratações Temporárias',
      descricao: 'Contrate estagiários para projetos específicos (5–30 dias), com remuneração ajustada e suporte da plataforma.'
    }
  ];

  etapas = [
    { numero: 1, titulo: 'Criação da Oportunidade', descricao: 'Crie novas oportunidades ou projetos em nossa plataforma.' },
    { numero: 2, titulo: 'Revisão', descricao: 'A oportunidade passa por uma revisão da nossa equipe. Verificamos a coerência com o mercado e padrões da Trabuka. Tempo: 1 dia.' },
    { numero: 3, titulo: 'Candidatos', descricao: 'A Trabuka cruza os requisitos com os candidatos da base, identificando os mais compatíveis.' },
    { numero: 4, titulo: 'Promoção da Oportunidade', descricao: 'Notificamos os candidatos compatíveis.' },
    { numero: 5, titulo: 'Receba Candidatos', descricao: 'Receba os primeiros candidatos em menos de 2 dias.' },
  ];
}
