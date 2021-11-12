import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Usuario } from '../formusuario/usuario.model';
import { UsuarioService } from '../formusuario/usuario.service';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  [x: string]: any;
 
  constructor(private router: Router, private service: AccountService) {}
  
  user = {
    usuario: '',
    senha: '',
  }

  mostrarMenuEmitter = new EventEmitter<boolean>();

  async canActivate(
    aroute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean>{
      this.user.usuario = window.localStorage.getItem('user')!;
      this.user.senha  = window.localStorage.getItem('password')!;
      const result = await this.service.auth(this.user)
      if(result)
      {
          this.mostrarMenuEmitter.emit(true);
          return true;
      }
      else {
          this.mostrarMenuEmitter.emit(false);
          this.router.navigate(['login']);
          return false;
      }
  }

}
