import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoteByBovino } from './histlotebovino.model';

@Injectable({
  providedIn: 'root'
})
export class HistlotebovinoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(id: String):Observable<LoteByBovino[]> {
    const url = `${this.baseUrl}statusbovinoandlote/findallbyanimal?animal=${id}`
    return this.http.get<LoteByBovino[]>(url);
  }

  create(lotebov: LoteByBovino, idlot: String, idbov: String): Observable<LoteByBovino>{
    const url = `${this.baseUrl}statusbovinoandlote?animal=${idbov}&lote=${idlot}`
    return this.http.post<LoteByBovino>(url, lotebov)
  }

  findById(id: String):Observable<LoteByBovino> {
    const url = `${this.baseUrl}statusbovinoandlote/${id}`
    return this.http.get<LoteByBovino>(url);
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}statusbovinoandlote/${id}`
    return this.http.delete<void>(url)
  }

  update(lotebov: LoteByBovino):Observable<void> {
    const url = `${this.baseUrl}statusbovinoandlote/${lotebov.id}`
    return this.http.put<void>(url, lotebov)
  }

  mensagem(str: String): void {
    this.snack.open(`${str!}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
