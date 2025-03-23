import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaDTO } from '../DTO/conta.model';

@Injectable({
  providedIn: 'root'
})
export class ContaService{

  constructor(private http: HttpClient) {}

  listarContas(clienteId: number):Observable<ContaDTO[]>{
    return this.http.get<ContaDTO[]>('http://localhost:8080/conta/cliente/'+clienteId);
  }

}
