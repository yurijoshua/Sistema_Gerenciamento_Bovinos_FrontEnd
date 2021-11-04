import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';

@Component({
  selector: 'app-telalogin',
  templateUrl: './telalogin.component.html',
  styleUrls: ['./telalogin.component.css']
})
export class TelaloginComponent implements OnInit {

  login = {
    usuario: '',
    senha: ''
  };

  constructor( private service: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.service.login(this.login)
      console.log("login efetuado: ${result)")
      this.router.navigate(['']);
    }
    catch (error) {
      console.log(error)
    }
  }
}
