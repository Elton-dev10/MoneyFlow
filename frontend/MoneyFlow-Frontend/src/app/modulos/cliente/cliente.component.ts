import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../service/cliente.service';
import { ClienteDTO } from '../../DTO/cliente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.less'
})
export class ClienteComponent implements OnInit{
  titulo: string = "primeira mensagem";
  receivedData: string = '';
  formulario?: FormGroup<any>;
  formularioEdicao?: FormGroup<any>;
  clientes?: ClienteDTO[];

  /**
   *
   */
  constructor(private clienteService: ClienteService, private routes: Router, private frm: FormBuilder, private modalService: MatDialog) {
     this.formulario = this.frm.group({
       nome: [''],
       cpf:['', Validators.required],
       telefone:['', Validators.required] 
     });
  }

  ngOnInit(): void {
    this.clienteService.listaClientes().subscribe(
      data => this.clientes = data
    );
  }
   

  handleCadastrarCliente(){
    this.routes.navigate(["app/cliente/cadastrar"]);
  }

  openEdit(cliente: ClienteDTO) {
    this.routes.navigate(["app/cliente/edit"], { state: { cliente } });
  }
  
}