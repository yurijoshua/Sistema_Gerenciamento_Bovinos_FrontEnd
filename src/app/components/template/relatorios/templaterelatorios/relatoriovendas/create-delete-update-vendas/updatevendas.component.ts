import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendas } from '../vendas.model';
import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-updatevendas',
  templateUrl: './updatevendas.component.html',
  styleUrls: ['./updatevendas.component.css']
})
export class UpdatevendasComponent implements OnInit {

  constructor(private service: VendasService, private route: Router, private aroute: ActivatedRoute) { }

  venda: Vendas = {
    valorArroba: '',
    dataVenda: '',
    registroComprador: '',
    valorLote: ''
  }

  ngOnInit(): void {
    this.venda.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.venda.id!).subscribe((resposta) => {
      this.venda.valorArroba = resposta.valorArroba
      this.venda.dataVenda = resposta.dataVenda
      this.venda.registroComprador = resposta.registroComprador
      this.venda.valorLote = resposta.valorLote
    })
  }

  update(): void{
    this.service.update(this.venda).subscribe((resposta) => {
    this.route.navigate([`relatorios`])
    this.service.mensagem(`Venda alterada com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.route.navigate([`relatorios`])
  }

}
