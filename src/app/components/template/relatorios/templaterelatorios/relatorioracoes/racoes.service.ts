import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lotes } from '../relatoriolotes/lotes.model';
import { Racoes } from './racoes.model';

@Injectable({
  providedIn: 'root'
})
export class RacoesService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll():Observable<Racoes[]> {
    const url = `${this.baseUrl}racao`
    return this.http.get<Racoes[]>(url);
  }

  findalllotesracao(id: String):Observable<Lotes[]> {
    const url = `${this.baseUrl}statusracaoandlote/findallbyracao?racao=${id}`
    return this.http.get<Lotes[]>(url);
  }

  findById(id: String):Observable<Racoes> {
    const url = `${this.baseUrl}racao/${id}`
    return this.http.get<Racoes>(url);
  }

  create(racao: Racoes): Observable<Racoes>{
    const url = `${this.baseUrl}racao`
    return this.http.post<Racoes>(url, racao)
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}racao/${id}`
    return this.http.delete<void>(url)
  }

  update(racao: Racoes):Observable<void> {
    const url = `${this.baseUrl}racao/${racao.id}`
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
