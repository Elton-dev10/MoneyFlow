import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaFormComponent } from './component/conta-form/conta-form.component';
import { MovimentacaoFormComponent } from './component/movimentacao-form/movimentacao-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContaFormComponent,
    MovimentacaoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
