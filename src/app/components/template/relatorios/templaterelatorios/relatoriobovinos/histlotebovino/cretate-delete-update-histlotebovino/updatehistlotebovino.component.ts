import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { LoteByBovino } from '../histlotebovino.model';
import { HistlotebovinoService } from '../histlotebovino.service';

@Component({
  selector: 'app-updatehistlotebovino',
  templateUrl: './updatehistlotebovino.component.html',
  styleUrls: ['./updatehistlotebovino.component.css']
})
export class UpdatehistlotebovinoComponent implements OnInit {

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

  update(): void{
    this.service.update(this.lotbov).subscribe((resposta) => {
    this.location.back();
    this.service.mensagem(`Lote do bovino alterado com êxito!`);
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
