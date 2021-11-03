import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Racoes } from '../../relatorioracoes/racoes.model';
import { Lotes } from '../lotes.model';
import { RacoesbyLote } from './racoesbylote.model';

@Injectable({
  providedIn: 'root'
})
export class RacoesbyloteService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findallracoeslote(id: String):Observable<Racoes[]> {
    const url = `${this.baseUrl}statusracaoandlote/findallbylote?lote=${id}`
    return this.http.get<Racoes[]>(url);
  }

  findAll(id: String):Observable<RacoesbyLote[]> {
    const url = `${this.baseUrl}statusracaoandlote/findallbyanimal?animal=${id}`
    return this.http.get<RacoesbyLote[]>(url);
  }

  create(Racoeslote: RacoesbyLote, idRacao: String, idLote: String): Observable<RacoesbyLote>{
    const url = `${this.baseUrl}statusracaoandlote?racao=${idRacao}&lote=${idLote}`
    return this.http.post<RacoesbyLote>(url, Racoeslote)
  }

  findById(id: String):Observable<RacoesbyLote> {
    const url = `${this.baseUrl}statusracaoandlote/${id}`
    return this.http.get<RacoesbyLote>(url);
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}statusracaoandlote/${id}`
    return this.http.delete<void>(url)
  }

  update(Racoeslote: RacoesbyLote):Observable<void> {
    const url = `${this.baseUrl}statusracaoandlote/${Racoeslote.id}`
    return this.http.put<void>(url, Racoeslote)
  }

  mensagem(str: String): void {
    this.snack.open(`${str!}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
