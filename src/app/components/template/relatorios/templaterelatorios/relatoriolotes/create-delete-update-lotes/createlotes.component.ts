import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lotes } from '../lotes.model';
import { LotesService } from '../lotes.service';

@Component({
  selector: 'app-createlotes',
  templateUrl: './createlotes.component.html',
  styleUrls: ['./createlotes.component.css']
})
export class CreatelotesComponent implements OnInit {

  constructor(private service: LotesService, private route: Router) { }

  lote: Lotes = {
    nomeLote: '',
    dataCriacao: ''
  }

  ngOnInit(): void {

  }

  create(): void {
    if(this.lote.nomeLote != '')
    {   
      const d = new Date();
      let data =  String (d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
      this.lote.dataCriacao = data;
      this.service.create(this.lote).subscribe((resposta) => {
        this.route.navigate(['relatorios'])
        this.service.mensagem('Lote criado com sucesso!');
      })
    }
    else
    {
      this.service.mensagem('Preencha todos os campos!')
    }
  }
}
