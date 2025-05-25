import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'; // ✅ caminho relativo correto


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule // ✅ importa aqui para usar o HeaderComponent
  ]
})
export class EncontrarEstagiosModule { }
