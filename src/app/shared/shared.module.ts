import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../Components/site/header/header.component'; // ajusta o path conforme necessário

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent] // importante!
})
export class SharedModule { }
