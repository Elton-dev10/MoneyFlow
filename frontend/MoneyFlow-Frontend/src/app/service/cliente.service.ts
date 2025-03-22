import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteDTO } from '../DTO/cliente.model';
import { Observable } from 'rxjs';
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
    return this.http.post<ClienteContaRequest>("http://localhost:8080/cliente",cliente);
  }

  listaClientes():Observable<ClienteDTO[]> {
      return this.http.get<ClienteDTO[]>("http://localhost:8080/cliente");
  }
}
