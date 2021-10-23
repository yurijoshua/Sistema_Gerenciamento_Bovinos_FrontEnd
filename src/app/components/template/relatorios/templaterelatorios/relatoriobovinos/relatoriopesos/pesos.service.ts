import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pesos } from './pesos.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PesosService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(id: String):Observable<Pesos[]> {
    const url = `${this.baseUrl}peso/animal/${id}`
    console.log(url)
    return this.http.get<Pesos[]>(url);
  }

  create(peso: Pesos, id: String): Observable<Pesos>{
    const url = `${this.baseUrl}peso/create/${id}`
    return this.http.post<Pesos>(url, peso)
  }

  findById(id: String):Observable<Pesos> {
    const url = `${this.baseUrl}peso/${id}`
    return this.http.get<Pesos>(url);
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}peso/delete/${id}`
    return this.http.delete<void>(url)
  }

  update(peso: Pesos):Observable<void> {
    const url = `${this.baseUrl}peso/update/${peso.id}`
    return this.http.put<void>(url, peso)
  }

  mensagem(str: String): void {
    this.snack.open(`${str!}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
