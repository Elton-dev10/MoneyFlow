import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClienteDTO } from '../../../DTO/cliente.model';
import { ContaDTO } from '../../../DTO/conta.model';
import { ContaService } from '../../../service/conta.service';
import { MovimentacaoService } from '../../../service/movimentacao.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movimentacao-form',
  templateUrl: './movimentacao-form.component.html',
  styleUrl: './movimentacao-form.component.less'
})
export class MovimentacaoFormComponent implements OnInit{
  formMov!: FormGroup;
  @Input() cliente!: number;
  public contas: ContaDTO[] = [];

  constructor(
    private fb: FormBuilder, 
    private contaService: ContaService,
    private movimentacaoService: MovimentacaoService,
    private modalService: NgbActiveModal
  ){
    this.formMov = this.fb.group({
      origem: [''],
      destino: [''],
      valor: ['']
    });
  }

  get origem(): FormControl{
    return this.formMov?.get('origem') as FormControl;
  }

  ngOnInit(): void {
    this.contaService.listarContas(this.cliente)
    .subscribe(contas => this.contas = contas);
  }

  save(){
    const origem = this.formMov.get('origem')?.value;
    const destino = this.formMov.get('destino')?.value;
    const valor = this.formMov.get('valor')?.value;
    this.movimentacaoService.salvarMovimentacao(origem, destino, valor).subscribe(
      () => {
        this.modalService.close('Movimentação realizada com sucesso');
      },
      (error) => {
        this.modalService.close('Erro ao realizar a movimentação');
      }
    );

  }
}