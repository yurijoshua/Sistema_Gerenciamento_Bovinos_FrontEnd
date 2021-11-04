import { Component, OnInit } from '@angular/core';
import { AccountService } from '../telalogin/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private service : AccountService) { }

  ngOnInit(): void {
  }

  RemoveToken() {
    return new Promise((resolve) => {
      window.localStorage.removeItem('token')
      resolve(true)
    })
  }

}
