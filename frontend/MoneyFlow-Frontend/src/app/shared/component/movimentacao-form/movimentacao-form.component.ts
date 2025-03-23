import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClienteDTO } from '../../../DTO/cliente.model';
import { ContaDTO } from '../../../DTO/conta.model';
import { ContaService } from '../../../service/conta.service';

@Component({
  selector: 'app-movimentacao-form',
  templateUrl: './movimentacao-form.component.html',
  styleUrl: './movimentacao-form.component.less'
})
export class MovimentacaoFormComponent implements OnInit{
  formMov!: FormGroup;
  @Input() cliente!: number;
  public contas: ContaDTO[] = [];

  constructor(private fb: FormBuilder, private contaService: ContaService){
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
}