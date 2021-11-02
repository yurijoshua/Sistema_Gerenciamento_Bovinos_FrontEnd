import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bovinos } from './bovinos.model';

@Injectable({
  providedIn: 'root'
})
export class BovinosService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll():Observable<Bovinos[]> {
    const url = `${this.baseUrl}animal`
    return this.http.get<Bovinos[]>(url);
  }

  findById(id: String):Observable<Bovinos> {
    const url = `${this.baseUrl}animal/${id}`
    return this.http.get<Bovinos>(url);
  }

  create(bovino: Bovinos): Observable<Bovinos>{
    const url = `${this.baseUrl}animal`
    return this.http.post<Bovinos>(url, bovino)
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}animal/${id}`
    return this.http.delete<void>(url)
  }

  update(bovino: Bovinos):Observable<void> {
    const url = `${this.baseUrl}animal/${bovino.id}`
    return this.http.put<void>(url, bovino)
  }

  mensagem(str: String): void {
    this.snack.open(`${str!}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
