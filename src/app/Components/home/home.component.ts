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
  questions = [
    { question: 'Como aplicar para uma vaga?', answers: ['Resposta 1', 'Resposta 2'] },
    { question: 'Qual curso é melhor para iniciantes?', answers: ['Resposta 1'] },
  ];
  jobs = [
    { title: 'Desenvolvedor Front-end', description: 'Vaga em Luanda, experiência com Angular.' },
    { title: 'Designer UI/UX', description: 'Projetos remotos, portfolio necessário.' },
  ];
  courses = [
    { title: 'Introdução ao Angular', description: 'Curso básico de 10 horas.' },
    { title: 'Design com Figma', description: 'Aprenda UI/UX em 15 horas.' },
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
    // Lógica de logout (ex.: limpar sessão, redirecionar para login)
    this.router.navigate(['/login']);
    this.isModalOpen = false;
  }

  postQuestion() {
    // Lógica para adicionar nova pergunta (ex.: via formulário)
    const newQuestion = prompt('Digite sua dúvida:');
    if (newQuestion) {
      this.questions.push({ question: newQuestion, answers: [] });
    }
  }

  addAnswer(qa: any) {
    const answer = (document.querySelector('.qa-answer-input') as HTMLTextAreaElement)?.value;
    if (answer) {
      qa.answers.push(answer);
      (document.querySelector('.qa-answer-input') as HTMLTextAreaElement).value = '';
    }
  }

  applyJob(job: any) {
    alert(`Candidatura enviada para: ${job.title}`);
    // Lógica de candidatura
  }

  enrollCourse(course: any) {
    alert(`Inscrito em: ${course.title}`);
    // Lógica de inscrição
  }
}
