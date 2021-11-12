import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../telalogin/auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthGuard) { }

  mostrarMenu: boolean = false;
  
  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  RemoveToken() {
    return new Promise((resolve) => {
      window.localStorage.removeItem('id')
      window.localStorage.removeItem('user')
      window.localStorage.removeItem('password')
      resolve(true)
    })
  }

}
