import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isModalOpen = false;
  userName = 'Usuário Exemplo'; // Substitua por dados reais do usuário
  newQuestion = '';
  newAnswer = '';
  dropdowns: { [key: string]: boolean } = { vagas: false, cursos: false };

  questions = [
    { question: 'Como aplicar para uma vaga?', author: 'João Silva', answers: [{ text: 'Acesse a vaga e clique em Candidatar-se.', author: 'Maria Santos' }] },
    { question: 'Qual curso é melhor para iniciantes?', author: 'Ana Pereira', answers: [] },
  ];
  jobs = [
    { title: 'Desenvolvedor Front-end', description: 'Vaga em Luanda, experiência com Angular.' },
    { title: 'Designer UI/UX', description: 'Projetos remotos, portfolio necessário.' },
  ];
  courses = [
    { title: 'Introdução ao Angular', description: 'Curso básico de 10 horas.' },
    { title: 'Design com Figma', description: 'Aprenda UI/UX em 15 horas.' },
  ];
  projects = [
    { title: 'App de Gestão Escolar', description: 'Projeto colaborativo para escolas.' },
    { title: 'Site Corporativo', description: 'Desenvolvimento de site para empresa local.' },
  ];

  constructor(private router: Router) {}

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  closeModal(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.isModalOpen = false;
    }
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  logout() {
    this.router.navigate(['/login']);
    this.isModalOpen = false;
  }

  search() {
    // Lógica de pesquisa
  }

  postQuestion() {
    if (this.newQuestion.trim()) {
      this.questions.push({ question: this.newQuestion, author: this.userName, answers: [] });
      this.newQuestion = '';
    }
  }

  addAnswer(qa: any) {
    if (this.newAnswer.trim()) {
      qa.answers.push({ text: this.newAnswer, author: this.userName });
      this.newAnswer = '';
    }
  }

  applyJob(job: any) {
    alert(`Candidatura enviada para: ${job.title}`);
  }

  enrollCourse(course: any) {
    alert(`Inscrito em: ${course.title}`);
  }

  joinProject(project: any) {
    alert(`Participação confirmada em: ${project.title}`);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  toggleDropdown(event: MouseEvent, type: string) {
    event.preventDefault();
    this.dropdowns[type] = !this.dropdowns[type];
    // Fecha outros dropdowns se aberto
    Object.keys(this.dropdowns).forEach(key => {
      if (key !== type) this.dropdowns[key] = false;
    });
  }
}
