import { Component } from '@angular/core';

@Component({
  selector: 'app-blogue',
  standalone: false,
  templateUrl: './blogue.component.html',
  styleUrl: './blogue.component.css'
})
export class BlogueComponent {

  posts = [
    {
      id: 1,
      titulo: '5 Dicas para Iniciar sua Carreira em Tecnologia',
      resumo: 'Descubra como dar os primeiros passos no mercado tech com estágios práticos e projetos reais.',
      autor: 'Ana Silva',
      data: '15/05/2025',
      categoria: 'Carreira',
      imagem: 'assets/img/portfolio/portfolio-4.jpg' // Placeholder para imagem
    },
    {
      id: 2,
      titulo: 'A Importância do Design UI/UX no Mercado Angolano',
      resumo: 'Saiba como o design de interfaces pode transformar negócios e atrair clientes.',
      autor: 'João Mendes',
      data: '10/05/2025',
      categoria: 'Design',
      imagem: 'assets/img/portfolio/portfolio-4.jpg'
    },
    {
      id: 3,
      titulo: 'Como a Trabuka Combate o Desemprego Juvenil',
      resumo: 'Entenda o impacto da Trabuka na conexão entre jovens talentos e empresas em Angola.',
      autor: 'Maria Fernandes',
      data: '05/05/2025',
      categoria: 'Carreira',
      imagem: 'assets/img/portfolio/portfolio-4.jpg'
    }
  ];

  categorias = ['Todas', 'Tecnologia', 'Design', 'Carreira'];
  filtroCategoria: string = 'Todas';

  filtrarPosts() {
    if (this.filtroCategoria === 'Todas') {
      return this.posts;
    }
    return this.posts.filter(post => post.categoria === this.filtroCategoria);
  }

  lerPost(postId: number) {
    // Placeholder para navegação para o post completo
    alert(`Abrir post com ID ${postId}`);
  }
}
