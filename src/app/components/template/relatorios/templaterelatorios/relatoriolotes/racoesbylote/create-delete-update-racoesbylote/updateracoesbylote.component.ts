import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RacoesbyLote } from '../racoesbylote.model';
import { RacoesbyloteService } from '../racoesbylote.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updateracoesbylote',
  templateUrl: './updateracoesbylote.component.html',
  styleUrls: ['./updateracoesbylote.component.css']
})
export class UpdateracoesbyloteComponent implements OnInit {

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

  update(): void{
    this.service.update(this.lotbov).subscribe((resposta) => {
    this.location.back();
    this.service.mensagem(`Status da ração e lote alterado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.location.back();
  }

  onkey(event: any) {
    if(event.target.name == "tempoInicial")
    {
      this.lotbov.tempoInicial = event.target.value
    }
    else
    {
      this.lotbov.tempoFinal = event.target.value
    }
  }
}
