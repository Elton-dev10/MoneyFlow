import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../service/cliente.service';
import { ClienteDTO } from '../../DTO/cliente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { Route, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MovimentacaoFormComponent } from '../../shared/component/movimentacao-form/movimentacao-form.component';

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

  constructor(
    private clienteService: ClienteService,
    private routes: Router,
    private frm: FormBuilder,
    private modalService: NgbModal
  ) {
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

  openModalCadastrar(cliente: ClienteDTO) {
    const modalRef:NgbModalRef = this.modalService.open(MovimentacaoFormComponent,
       { size: 'lg', centered: true, windowClass: 'custom-modal-height' });
    modalRef.componentInstance.cliente = cliente.id;
  }  

  openEdit(cliente: ClienteDTO) {
    this.routes.navigate(["app/cliente/edit"], { state: { cliente } });
  }
  
}