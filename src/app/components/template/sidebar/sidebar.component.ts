import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../telalogin/auth.guard';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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
