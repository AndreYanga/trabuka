import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component'; // Add this if not already present

@NgModule({
  declarations: [
    HeaderLayoutComponent,
    PageComponent,
    DashboardComponent,
    FooterLayoutComponent,
    SidebarComponent // Ensure PageComponent is declared here
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
