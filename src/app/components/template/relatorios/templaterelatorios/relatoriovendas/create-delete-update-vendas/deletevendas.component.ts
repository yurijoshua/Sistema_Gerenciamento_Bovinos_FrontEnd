import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendas } from '../vendas.model';
import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-deletevendas',
  templateUrl: './deletevendas.component.html',
  styleUrls: ['./deletevendas.component.css']
})
export class DeletevendasComponent implements OnInit {

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
      console.log(resposta)
      this.venda.valorArroba = resposta.valorArroba
      this.venda.dataVenda = resposta.dataVenda
      this.venda.registroComprador = resposta.registroComprador
      this.venda.valorLote = resposta.valorLote
    })
  }

  delete(): void{
    this.service.delete(this.venda.id!).subscribe((resposta) => {
    this.route.navigate([`relatorios`])
    this.service.mensagem(`Venda deletada com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.route.navigate([`relatorios`])
  }

}
