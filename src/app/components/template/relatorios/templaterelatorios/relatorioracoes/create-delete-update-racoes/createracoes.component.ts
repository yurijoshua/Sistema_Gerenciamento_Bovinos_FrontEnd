import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Racoes } from '../racoes.model';
import { RacoesService } from '../racoes.service';

@Component({
  selector: 'app-createracoes',
  templateUrl: './createracoes.component.html',
  styleUrls: ['./createracoes.component.css']
})
export class CreateracoesComponent implements OnInit {

  constructor(private service: RacoesService, private route: Router) { }

  racao: Racoes = {
    ingredientes: '',
    dataCriacao: ''
  }

  ngOnInit(): void {

  }

  create(): void {
    if(this.racao.ingredientes != '')
    {   
      this.service.create(this.racao).subscribe((resposta) => {
        this.route.navigate(['relatorios'])
        this.service.mensagem('Ração criado com sucesso!');
      })
    }
    else
    {
      this.service.mensagem('Preencha todos os campos!')
    }
  }

}
