import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovimentacaoDTO } from '../DTO/movimentacao.model';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) {}

  salvarMovimentacao(origem: number, destino: number, valor: number){
    console.log("passou aqui");
    const params:HttpParams = new HttpParams()
    .set('origem', String(origem))
    .set('destino', String(destino))
    .set('valor', String(valor));
    return this.http.post('http://localhost:8080/transferencia', null, { params });
  }
}
