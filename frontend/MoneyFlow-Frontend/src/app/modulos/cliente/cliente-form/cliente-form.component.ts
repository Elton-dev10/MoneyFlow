import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteDTO } from '../../../DTO/cliente.model';
import { ClienteService } from '../../../service/cliente.service';
import { ContaDTO } from '../../../DTO/conta.model';
import { ClienteContaRequest } from '../../../request/cliente-conta.model';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.less'
})
export class ClienteFormComponent implements OnInit{
  formulario!: FormGroup<any>;

  /**
   *
   */
  constructor(private frm: FormBuilder, private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.formulario = this.frm.group({
      nome: [''],
      cpf:['', Validators.required],
      telefone:['', Validators.required],
      conta: this.frm.array([]) 
    });
  }

  get contas(): FormArray {
    return this.formulario.get('conta') as FormArray;
  }

  adicionarConta(){
    const contaForm = this.frm.group({
      agencia: ['', Validators.required],
      tipoConta: ['', Validators.required],
      saldo: ['', Validators.required]
    });
    this.contas.push(contaForm);
  }

  removerConta(index: number) {
    this.contas.removeAt(index);
  }

  salvar(){
      if (!this.formulario?.valid) {
        return;
      }
      const cliente: ClienteDTO = {
        nome: this.formulario?.get('nome')?.value,
        cpf: this.formulario?.get('cpf')?.value,
        telefone: this.formulario?.get('telefone')?.value,
      };

      const clienteRequest: ClienteContaRequest ={
        cliente: cliente,
        contas: []
      }

      const listaConstas: FormArray = this.contas;

      Object.values(listaConstas.controls).map(m => {
        console.log(m.value);
        clienteRequest.contas.push(m.value);
      });

      this.clienteService.cadastroBackCliente(clienteRequest).subscribe(data => {
        console.log(data)
      },
      err => {
        console.log(err);
      },
      () => {
        this.formulario = this.frm.group({
          nome: [''],
          cpf: [''],
          telefone: [''],
          conta: this.frm.array([])
        });
      }
    );
    }
}
