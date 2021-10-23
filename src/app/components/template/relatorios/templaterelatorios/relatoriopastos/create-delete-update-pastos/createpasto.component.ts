import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pastos } from '../pastos.model';
import { PastosService } from '../pastos.service';

@Component({
  selector: 'app-createpasto',
  templateUrl: './createpasto.component.html',
  styleUrls: ['./createpasto.component.css']
})
export class CreatepastoComponent implements OnInit {

  constructor(private service: PastosService, private route: Router) { }

  pasto: Pastos = {
    nomePasto: '',
    dataCriacao: ''
  }

  ngOnInit(): void {

  }

  create(): void {
    if(this.pasto.nomePasto != '')
    {   
      this.service.create(this.pasto).subscribe((resposta) => {
        this.route.navigate(['relatorios'])
        this.service.mensagem('Pasto criado com sucesso!');
      })
    }
    else
    {
      this.service.mensagem('Preencha todos os campos!')
    }
  }

}
