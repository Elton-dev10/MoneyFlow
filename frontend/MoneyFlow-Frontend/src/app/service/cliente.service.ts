import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteDTO } from '../DTO/cliente.model';
import { Observable, of, Subject } from 'rxjs';
import { ClienteContaRequest } from '../request/cliente-conta.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  /**
   *
   */
  constructor(private http: HttpClient) {  
  }

  cadastroBackCliente(cliente: ClienteContaRequest): Observable<ClienteContaRequest>{
    console.log(cliente);
    // return this.http.post<ClienteContaRequest>("http://localhost:8080/cliente",cliente);
    return of(cliente);
  }

  listaClientes():Observable<ClienteDTO[]> {
      const clientes: ClienteDTO[] = [
        {
        id: 1,
        nome: 'João Silva',
        telefone: '11999999999',
        cpf: '123.456.789-00'
        },
        {
        id: 2,
        nome: 'Maria Souza',
        telefone: '11988888888',
        cpf: '987.654.321-00'
        },
        {
        id: 3,
        nome: 'Carlos Pereira',
        telefone: '11977777777',
        cpf: '111.222.333-44'
        }
      ];
      // return this.http.get<ClienteDTO[]>("http://localhost:8080/cliente");
      return of(clientes);
  }
}
