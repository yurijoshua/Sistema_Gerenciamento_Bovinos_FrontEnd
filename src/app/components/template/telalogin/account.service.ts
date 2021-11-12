import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { UsuarioService } from '../formusuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private snack: MatSnackBar, private user_service: UsuarioService) { }

  baseUrl: String = environment.baseUrl;
    
  async auth(user: any){
    const result = await this.http.post<any>(`${this.baseUrl}usuario/auth/login`, user).toPromise();
    if(result[0]!=null)
    {
      return true
    }
    else
    {
      return false
    }
  }

  async login(user: any){
    const result = await this.http.post<any>(`${this.baseUrl}usuario/auth/login`, user).toPromise();
    if(result[0]!=null)
    {
        window.localStorage.setItem('id', result[0][0])
        window.localStorage.setItem('user', result[0][2])
        window.localStorage.setItem('password', result[0][3])
        return true
    }
    else
    {
      this.mensagem("Não foi possivel realizar o login, seu usuario ou senha está incorreto!");
      return false
    }
  }

  mensagem(str: String): void {
    this.snack.open(`${str!}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
