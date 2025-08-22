import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaFormComponent } from './component/conta-form/conta-form.component';
import { MovimentacaoFormComponent } from './component/movimentacao-form/movimentacao-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InputAgendamentoMovimentacaoComponent } from './component/input-agendamento-movimentacao/input-agendamento-movimentacao.component';



@NgModule({
  declarations: [
    ContaFormComponent,
    MovimentacaoFormComponent,
    InputAgendamentoMovimentacaoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule
  ]
})
export class SharedModule { }
