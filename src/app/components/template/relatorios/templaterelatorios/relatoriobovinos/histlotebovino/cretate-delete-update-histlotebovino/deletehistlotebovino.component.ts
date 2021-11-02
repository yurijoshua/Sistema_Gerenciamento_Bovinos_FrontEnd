import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoteByBovino } from '../histlotebovino.model';
import { HistlotebovinoService } from '../histlotebovino.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-deletehistlotebovino',
  templateUrl: './deletehistlotebovino.component.html',
  styleUrls: ['./deletehistlotebovino.component.css']
})
export class DeletehistlotebovinoComponent implements OnInit {

  constructor(private service: HistlotebovinoService, private route: Router, private aroute: ActivatedRoute, private location: Location) { }

  lotbov: LoteByBovino = {
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
    this.service.mensagem(`Lote do bovino deletado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.location.back();
  }

}
