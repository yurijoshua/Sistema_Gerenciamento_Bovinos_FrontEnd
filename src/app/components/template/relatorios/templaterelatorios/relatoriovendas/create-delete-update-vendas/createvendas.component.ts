import { ConstantPool } from '@angular/compiler';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Lotes } from '../../relatoriolotes/lotes.model';
import { PesoVendas, Vendas } from '../vendas.model';
import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-createvendas',
  templateUrl: './createvendas.component.html',
  styleUrls: ['./createvendas.component.css'],
})

export class CreatevendasComponent implements OnInit {
  
  constructor(private service: VendasService, private route: Router)  {   }

  private idlot!: Number;
    
  states: [] = [];

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
    this.findallLotesAtivos()
  }

  findallLotesAtivos() {
    this.service.findallLotesAtivos().subscribe(resposta => {
      this.states = resposta;
    })
  }

  create(): void {
    if(this.venda.valorArroba != 0 && this.venda.registroComprador != '')
    {   
      if(this.idlot != null)
      {
        this.service.create(this.idlot,this.venda,this.peso.pesoLote).subscribe((resposta) => {
        this.route.navigate(['relatorios'])
        this.service.mensagem('Venda cadastrada com sucesso!');
        })
      }
      else
      {
       this.service.mensagem('Deve ser selecionado o lote que será vendido, caso não tenha um lote ativo, é necessário realizar a criação!')
      }
    }
    else
    {
      this.service.mensagem('Preencha todos os campos!')
    }
  } 

  onkey(event: any) {
    this.venda.dataVenda = event.target.value
  }

  changeClient(value: any){
    this.idlot = value;
  }

}
