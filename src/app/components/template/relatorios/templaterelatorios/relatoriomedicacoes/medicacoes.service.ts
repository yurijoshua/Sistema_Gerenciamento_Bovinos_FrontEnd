import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medicacoes } from './medicacoes.model';

@Injectable({
  providedIn: 'root'
})
export class MedicacoesService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll():Observable<Medicacoes[]> {
    const url = `${this.baseUrl}medicacao`
    return this.http.get<Medicacoes[]>(url);
  }

  findById(id: String):Observable<Medicacoes> {
    const url = `${this.baseUrl}medicacao/${id}`
    return this.http.get<Medicacoes>(url);
  }

  create(medicacao: Medicacoes): Observable<Medicacoes>{
    const url = `${this.baseUrl}medicacao/create`
    return this.http.post<Medicacoes>(url, medicacao)
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}medicacao/delete/${id}`
    return this.http.delete<void>(url)
  }

  update(medicacao: Medicacoes):Observable<void> {
    const url = `${this.baseUrl}medicacao/update/${medicacao.id}`
    return this.http.put<void>(url, medicacao)
  }

  mensagem(str: String): void {
    this.snack.open(`${str!}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
