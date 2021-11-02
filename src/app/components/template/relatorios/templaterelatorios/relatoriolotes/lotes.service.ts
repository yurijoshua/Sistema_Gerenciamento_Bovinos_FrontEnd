import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bovinos } from '../relatoriobovinos/bovinos.model';
import { Lotes } from './lotes.model';

@Injectable({
  providedIn: 'root'
})
export class LotesService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAllbovinosbylote(id: String):Observable<[Bovinos]> {
    const url = `${this.baseUrl}statusbovinoandlote/findallbylote?lote=${id}`
    return this.http.get<[Bovinos]>(url);
  }

  findAll():Observable<Lotes[]> {
    const url = `${this.baseUrl}lote`
    return this.http.get<Lotes[]>(url);
  }

  findById(id: String):Observable<Lotes> {
    const url = `${this.baseUrl}lote/${id}`
    return this.http.get<Lotes>(url);
  }

  create(lote: Lotes): Observable<Lotes>{
    const url = `${this.baseUrl}lote`
    return this.http.post<Lotes>(url, lote)
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}lote/${id}`
    return this.http.delete<void>(url)
  }

  update(lote: Lotes):Observable<void> {
    const url = `${this.baseUrl}lote/${lote.id}`
    return this.http.put<void>(url, lote)
  }

  mensagem(str: String): void {
    this.snack.open(`${str!}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
