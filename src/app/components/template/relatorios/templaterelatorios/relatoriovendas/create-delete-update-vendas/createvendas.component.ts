import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendas } from '../vendas.model';
import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-createvendas',
  templateUrl: './createvendas.component.html',
  styleUrls: ['./createvendas.component.css']
})
export class CreatevendasComponent implements OnInit {
  
  constructor(private service: VendasService, private route: Router) { }

  venda: Vendas = {
    valorArroba: '',
    dataVenda: '',
    registroComprador: '',
    valorLote: ''
  }

  ngOnInit(): void {

  }

  create(): void {
    if(this.venda.valorArroba != '' && this.venda.registroComprador != '')
    {   
      this.service.create(this.venda).subscribe((resposta) => {
        this.route.navigate(['relatorios'])
        this.service.mensagem('Vendas cadastrada com sucesso!');
      })
    }
    else
    {
      this.service.mensagem('Preencha todos os campos!')
    }
  }

}
