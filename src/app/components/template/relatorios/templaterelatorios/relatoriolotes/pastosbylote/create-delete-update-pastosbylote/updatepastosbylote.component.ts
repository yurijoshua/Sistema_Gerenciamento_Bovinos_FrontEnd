import { Component, OnInit } from '@angular/core';
import { PastosbyLote } from '../pastosbylote.model';
import { PastosbyloteService } from '../pastosbylote.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatepastosbylote',
  templateUrl: './updatepastosbylote.component.html',
  styleUrls: ['./updatepastosbylote.component.css']
})
export class UpdatepastosbyloteComponent implements OnInit {

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

  update(): void{
    this.service.update(this.Pastoslote).subscribe((resposta) => {
    this.location.back();
    this.service.mensagem(`Status do pasto e lote alterado com êxito!`);
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
      this.Pastoslote.tempoInicial = event.target.value
    }
    else
    {
      this.Pastoslote.tempoFinal = event.target.value
    }
  }
}
