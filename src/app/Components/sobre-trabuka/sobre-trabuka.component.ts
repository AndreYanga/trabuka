import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-trabuka',
  standalone: false,
  templateUrl: './sobre-trabuka.component.html',
  styleUrl: './sobre-trabuka.component.css'
})
export class SobreTrabukaComponent {
  quemSomos = 'A Trabuka nasce com a visão de transformar o futuro profissional em Angola, conectando empresas a jovens talentos e oferecendo aos estudantes e profissionais as ferramentas para crescer.';
  missao = 'Despertar o potencial profissional dos jovens em tecnologia e design por meio de estágios práticos, conectando-os a empresas para construir carreiras impactantes e impulsionar o desenvolvimento digital de Angola.';
  visao = 'Ser referência na transformação dos jovens na área da tecnologia digital na África Austral, tornando-os profissionais altamente qualificados.';
  proposta = 'Criar um ecossistema acessível onde o aprendizado prático e as oportunidades de trabalho se encontram, combatendo o desemprego juvenil e promovendo uma economia digital inclusiva.';
  valores = [
    'Transparência',
    'Excelência',
    'Inovação',
    'Honestidade',
    'Melhores Parceiros',
    'Confiabilidade nas Informações'
  ];
  sistemaValores = [
    {
      titulo: 'Confiar',
      descricao: 'Cultivando um senso de confiança por meio de transações transparentes e seguras na plataforma Trabuka.'
    },
    {
      titulo: 'Respeito',
      descricao: 'Acolhendo profissionais de todas as esferas da vida e reconhecendo suas necessidades individuais em nosso ecossistema.'
    },
    {
      titulo: 'Responsabilidade',
      descricao: 'Incentivando a apropriação de ações e interações para garantir harmonia na Trabuka.'
    },
    {
      titulo: 'Integridade',
      descricao: 'Sendo justos e éticos em tudo o que fazemos, desde a avaliação de projetos até a conexão com empresas.'
    },
    {
      titulo: 'Tolerância',
      descricao: 'Praticando uma atitude resiliente e incentivando um ambiente de trabalho positivo na Trabuka.'
    }
  ];
}
