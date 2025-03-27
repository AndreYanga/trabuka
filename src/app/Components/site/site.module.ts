import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ParaEmpresasComponent } from './para-empresas/para-empresas.component';
import { ParaEstudantesComponent } from './para-estudantes/para-estudantes.component';
import { ServicesComponent } from './services/services.component';
import { InscricaoComponent } from './inscricao/inscricao.component';
import { VagasComponent } from './vagas/vagas.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    SiteComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    HowItWorksComponent,
    ParaEmpresasComponent,
    ParaEstudantesComponent,
    ServicesComponent,
    InscricaoComponent,
    VagasComponent,
    BeneficiosComponent,
    FaqComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
