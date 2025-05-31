import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EncontrarEstagiosComponent } from './Components/encontrar-estagios/encontrar-estagios.component';
import { SharedModule } from './shared/shared.module';
import { PageModule } from './Components/page/page.module';
import { EncontrarEstagiosModule } from './Components/encontrar-estagios/encontrar-estagios.module';
import { BeneficiosParticiparComponent } from './Components/beneficios-participar/beneficios-participar.component';
import { ParaEmpresasComponent } from './Components/para-empresas/para-empresas.component';
import { SobreTrabukaComponent } from './Components/sobre-trabuka/sobre-trabuka.component';
import { BlogueComponent } from './Components/blogue/blogue.component';
import { HomeComponent } from './Components/home/home.component';





@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        EncontrarEstagiosComponent,
        BeneficiosParticiparComponent,
        ParaEmpresasComponent,
        SobreTrabukaComponent,
        BlogueComponent,
        HomeComponent,


    ],
    bootstrap: [AppComponent],
    imports:[
        BrowserModule,
        FormsModule,
        PageModule,
        AppRoutingModule,
        RouterModule,
        SharedModule,
        EncontrarEstagiosModule
      ],
      providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
