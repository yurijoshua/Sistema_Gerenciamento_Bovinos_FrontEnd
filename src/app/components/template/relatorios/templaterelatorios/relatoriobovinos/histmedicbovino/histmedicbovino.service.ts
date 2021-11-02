import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MedicByBovino } from './histmedicbovino.model';

@Injectable({
  providedIn: 'root'
})
export class HistmedicbovinoService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(id: String):Observable<MedicByBovino[]> {
    const url = `${this.baseUrl}historicomedicacao/findallbyanimal?animal=${id}`
    return this.http.get<MedicByBovino[]>(url);
  }

  create(medbov: MedicByBovino, idmed: String, idbov: String): Observable<MedicByBovino>{
    const url = `${this.baseUrl}historicomedicacao?animal=${idbov}&medicacao=${idmed}`
    return this.http.post<MedicByBovino>(url, medbov)
  }

  findById(id: String):Observable<MedicByBovino> {
    const url = `${this.baseUrl}historicomedicacao/${id}`
    return this.http.get<MedicByBovino>(url);
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}historicomedicacao/${id}`
    return this.http.delete<void>(url)
  }

  update(medbov: MedicByBovino):Observable<void> {
    const url = `${this.baseUrl}historicomedicacao/${medbov.id}`
    return this.http.put<void>(url, medbov)
  }

  mensagem(str: String): void {
    this.snack.open(`${str!}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
