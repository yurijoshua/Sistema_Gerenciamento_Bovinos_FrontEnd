import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  login(user: any){
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token')
      resolve(true)
    })
  }
  
}
