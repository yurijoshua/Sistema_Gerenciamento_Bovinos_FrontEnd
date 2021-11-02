import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PesoVendas, Vendas } from '../vendas.model';
import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-createvendas',
  templateUrl: './createvendas.component.html',
  styleUrls: ['./createvendas.component.css'],
})

export class CreatevendasComponent implements OnInit {
  
  constructor(private service: VendasService, private route: Router)  {   }

  venda: Vendas = {
    valorArroba: 0,
    dataVenda: '',
    registroComprador: '',
    valorLote: 0
  }

  peso: PesoVendas = {
    pesoLote: 0
  }

  ngOnInit(): void {

  }

  create(): void {
    if(this.venda.valorArroba != 0 && this.venda.registroComprador != '')
    {   
      this.venda.valorLote = this.peso.pesoLote*this.venda.valorArroba
      this.service.create(this.venda).subscribe((resposta) => {
        this.route.navigate(['relatorios'])
        this.service.mensagem('Venda cadastrada com sucesso!');
      })
    }
    else
    {
      this.service.mensagem('Preencha todos os campos!')
    }
  } 

  onkey(event: any) {
    this.venda.dataVenda = event.target.value
  }

}
