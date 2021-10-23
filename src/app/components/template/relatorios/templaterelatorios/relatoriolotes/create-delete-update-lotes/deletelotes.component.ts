import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Lotes } from '../lotes.model';
import { LotesService } from '../lotes.service';

@Component({
  selector: 'app-deletelotes',
  templateUrl: './deletelotes.component.html',
  styleUrls: ['./deletelotes.component.css']
})
export class DeletelotesComponent implements OnInit {

  constructor(private service: LotesService, private route: Router, private aroute: ActivatedRoute) { }

  lote: Lotes = {
    id: '',
    nomeLote: '',
    dataCriacao: ''
  }

  ngOnInit(): void {
    this.lote.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.lote.id!).subscribe((resposta) => {
      this.lote.nomeLote = resposta.nomeLote
      this.lote.dataCriacao = resposta.dataCriacao
    })
  }

  delete(): void{
    this.service.delete(this.lote.id!).subscribe((resposta) => {
    this.route.navigate([`relatorios`])
    this.service.mensagem(`Lote deletado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.route.navigate([`relatorios`])
  }

}
