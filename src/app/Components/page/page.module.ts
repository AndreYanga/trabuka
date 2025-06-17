import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VagasComponent } from './vagas/vagas.component';
import { MeusProjetosComponent } from './meus-projetos/meus-projetos.component';
import { TesteHabilidadesComponent } from './teste-habilidades/teste-habilidades.component';
import { GanhosComponent } from './ganhos/ganhos.component';
import { ForumComponent } from './forum/forum.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component'; // Add this if not already present

@NgModule({
  declarations: [
    HeaderLayoutComponent,
    PageComponent,
    DashboardComponent,
    FooterLayoutComponent,
    SidebarComponent,
    MeuPerfilComponent,
    PortfolioComponent,
    VagasComponent,
    MeusProjetosComponent,
    TesteHabilidadesComponent,
    GanhosComponent,
    ForumComponent,
    ConfiguracoesComponent // Ensure PageComponent is declared here
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
