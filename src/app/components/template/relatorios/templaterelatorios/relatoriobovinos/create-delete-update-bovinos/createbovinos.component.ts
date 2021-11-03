import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bovinos } from '../bovinos.model';
import { BovinosService } from '../bovinos.service';

@Component({
  selector: 'app-createbovinos',
  templateUrl: './createbovinos.component.html',
  styleUrls: ['./createbovinos.component.css']
})

export class CreatebovinosComponent implements OnInit {

  constructor(private service: BovinosService, private route: Router) { }

  bovino: Bovinos = {
    brinco: '',
    raca: '',
    dataCriacao: '',
    status: ''
  }

  ngOnInit(): void   {

  }

  create(): void {
    if(this.bovino.brinco != '' && this.bovino.raca != '' && this.bovino.dataCriacao != '')
    {  
      this.service.create(this.bovino).subscribe((resposta) => {
        this.route.navigate(['relatorios'])
        this.service.mensagem('Bovino criado com sucesso!');
      }, err => {
        this.service.mensagem(err.error.message)  
      })
    }
    else
    {
      this.service.mensagem('Preencha todos os campos!')
    }
  }

  onkey(event: any) {
    this.bovino.dataCriacao = event.target.value
  }

}