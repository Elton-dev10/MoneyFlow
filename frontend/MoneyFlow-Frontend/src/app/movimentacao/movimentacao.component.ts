import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrl: './movimentacao.component.less'
})
export class MovimentacaoComponent {
  @Output() titulo = new EventEmitter<string>();

  sendData() {
    this.titulo.emit('Olá, Pai!'); // Envia os dados para o pai
  }
}
