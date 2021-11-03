import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RacoesbyLote } from '../racoesbylote.model';
import { RacoesbyloteService } from '../racoesbylote.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-deleteracoesbylote',
  templateUrl: './deleteracoesbylote.component.html',
  styleUrls: ['./deleteracoesbylote.component.css']
})
export class DeleteracoesbyloteComponent implements OnInit {

  constructor(private service: RacoesbyloteService, private route: Router, private aroute: ActivatedRoute, private location: Location) { }

  lotbov: RacoesbyLote = {
    id: '',
    tempoInicial: '',
    tempoFinal: ''
  }

  ngOnInit(): void {
    this.lotbov.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.lotbov.id!).subscribe((resposta) => {
      this.lotbov.tempoInicial = resposta.tempoInicial
      this.lotbov.tempoFinal = resposta.tempoFinal
    })
  }

  delete(): void{
    this.service.delete(this.lotbov.id!).subscribe((resposta) => {
    this.location.back();
    this.service.mensagem(`Status da ração e lote  deletado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.location.back();
  }

}
