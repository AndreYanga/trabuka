import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [{
  path: '',
  component: SiteComponent,
  children: [
    {path: 'header', component: HeaderComponent},
    {path: 'hero', component: HeaderComponent},
   
 ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
