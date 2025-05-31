import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './Components/site/site.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { EncontrarEstagiosComponent } from './Components/encontrar-estagios/encontrar-estagios.component';
import { BeneficiosParticiparComponent } from './Components/beneficios-participar/beneficios-participar.component';
import { ParaEmpresasComponent } from './Components/para-empresas/para-empresas.component';
import { SobreTrabukaComponent } from './Components/sobre-trabuka/sobre-trabuka.component';
import { BlogueComponent } from './Components/blogue/blogue.component';
import { HomeComponent } from './Components/home/home.component';




const routes: Routes = [
  {path:'', component:SiteComponent, pathMatch:"full"},
  {path:'site', loadChildren:() => import("./Components/site/site.module").then(m => m.SiteModule)},
  {path:'login', component:LoginComponent, pathMatch:"full"},
  {path:'register', component:RegisterComponent, pathMatch:"full"},
  {path: 'encontrar-estagios', component: EncontrarEstagiosComponent, pathMatch:"full" },
  {path: 'beneficios-participar', component: BeneficiosParticiparComponent, pathMatch:"full" },
  {path: 'sobre-trabuka', component: SobreTrabukaComponent, pathMatch:"full" },
  {path: 'home', component: HomeComponent, pathMatch:"full" },
  {path: 'blogue', component: BlogueComponent, pathMatch:"full" },
  {path: 'empresas', component: ParaEmpresasComponent, pathMatch:"full" },
  {path:'page', loadChildren:() => import("./Components/page/page.module").then(m => m.PageModule)},

  {path:'**', redirectTo:'site',pathMatch:"full"}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
