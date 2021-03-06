import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendas } from './vendas.model';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll():Observable<Vendas[]> {
    const url = `${this.baseUrl}venda`
    return this.http.get<Vendas[]>(url);
  }

  findallLotesAtivos():Observable<[]> {
    const url = `${this.baseUrl}venda/findallLotesAtivos`
    return this.http.get<[]>(url);
  }

  findById(id: String):Observable<Vendas> {
    const url = `${this.baseUrl}venda/${id}`
    return this.http.get<Vendas>(url);
  }

  create(id: Number,venda: Vendas,peso: Number): Observable<Vendas>{
    const id_user = window.localStorage.getItem('id');
    const url = `${this.baseUrl}venda?usuario=${id_user}&lote=${id}&peso=${peso}`
    return this.http.post<Vendas>(url, venda)
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}venda/${id}`
    return this.http.delete<void>(url)
  }

  update(racao: Vendas):Observable<void> {
    const url = `${this.baseUrl}venda/${racao.id}`
    return this.http.put<void>(url, racao)
  }

  mensagem(str: String): void {
    this.snack.open(`${str!}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
