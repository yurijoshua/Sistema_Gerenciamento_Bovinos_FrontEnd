import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pastos } from '../../relatoriopastos/pastos.model';
import { Lotes } from '../lotes.model';
import { PastosbyLote } from './pastosbylote.model';

@Injectable({
  providedIn: 'root'
})
export class PastosbyloteService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findallpastoslote(id: String):Observable<Pastos[]> {
    const url = `${this.baseUrl}statuspastoandlote/findallbylote?lote=${id}`
    return this.http.get<Pastos[]>(url);
  }

  findAll(id: String):Observable<PastosbyLote[]> {
    const url = `${this.baseUrl}statuspastoandlote/findallbypasto?pasto=${id}`
    return this.http.get<PastosbyLote[]>(url);
  }

  create(Pastoslote: PastosbyLote, idPasto: String, idLote: String): Observable<PastosbyLote>{
    const url = `${this.baseUrl}statuspastoandlote?pasto=${idPasto}&lote=${idLote}`
    return this.http.post<PastosbyLote>(url, Pastoslote)
  }

  findById(id: String):Observable<PastosbyLote> {
    const url = `${this.baseUrl}statuspastoandlote/${id}`
    return this.http.get<PastosbyLote>(url);
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}statuspastoandlote/${id}`
    return this.http.delete<void>(url)
  }

  update(Pastoslote: PastosbyLote):Observable<void> {
    const url = `${this.baseUrl}statuspastoandlote/${Pastoslote.id}`
    return this.http.put<void>(url, Pastoslote)
  }

  mensagem(str: String): void {
    this.snack.open(`${str!}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
