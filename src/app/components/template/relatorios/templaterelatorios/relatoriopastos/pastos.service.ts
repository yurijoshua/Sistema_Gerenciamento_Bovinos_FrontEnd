import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lotes } from '../relatoriolotes/lotes.model';
import { Pastos } from './pastos.model';

@Injectable({
  providedIn: 'root'
})
export class PastosService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAllByPasto(id: String):Observable<Lotes[]> {
    const url = `${this.baseUrl}statuspastoandlote/findallbypasto?pasto=${id}`
    return this.http.get<Lotes[]>(url);
  }

  findAll():Observable<Pastos[]> {
    const url = `${this.baseUrl}pasto`
    return this.http.get<Pastos[]>(url);
  }

  findById(id: String):Observable<Pastos> {
    const url = `${this.baseUrl}pasto/${id}`
    return this.http.get<Pastos>(url);
  }

  create(pasto: Pastos): Observable<Pastos>{
    const url = `${this.baseUrl}pasto`
    return this.http.post<Pastos>(url, pasto)
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}pasto/${id}`
    return this.http.delete<void>(url)
  }

  update(pasto: Pastos):Observable<void> {
    const url = `${this.baseUrl}pasto/${pasto.id}`
    return this.http.put<void>(url, pasto)
  }

  mensagem(str: String): void {
    this.snack.open(`${str!}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
