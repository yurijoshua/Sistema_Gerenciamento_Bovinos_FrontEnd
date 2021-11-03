import { Component, OnInit } from '@angular/core';
import { PastosbyLote } from '../pastosbylote.model';
import { PastosbyloteService } from '../pastosbylote.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deletepastosbylote',
  templateUrl: './deletepastosbylote.component.html',
  styleUrls: ['./deletepastosbylote.component.css']
})
export class DeletepastosbyloteComponent implements OnInit {

  constructor(private service: PastosbyloteService, private route: Router, private aroute: ActivatedRoute, private location: Location) { }

  Pastoslote: PastosbyLote = {
    id: '',
    tempoInicial: '',
    tempoFinal: ''
  }

  ngOnInit(): void {
    this.Pastoslote.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.Pastoslote.id!).subscribe((resposta) => {
      this.Pastoslote.tempoInicial = resposta.tempoInicial
      this.Pastoslote.tempoFinal = resposta.tempoFinal
    })
  }

  delete(): void{
    this.service.delete(this.Pastoslote.id!).subscribe((resposta) => {
    this.location.back();
    this.service.mensagem(`Statuos do pasto e lote deletado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.location.back();
  }

}
