import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistlotebovinoService } from '../../../relatoriobovinos/histlotebovino/histlotebovino.service';
import { Racoes } from '../../../relatorioracoes/racoes.model';
import { RacoesService } from '../../../relatorioracoes/racoes.service';
import { LotesService } from '../../lotes.service';
import { RacoesbyLote } from '../racoesbylote.model';
import { RacoesbyloteService } from '../racoesbylote.service';

@Component({
  selector: 'app-createracoesbylote',
  templateUrl: './createracoesbylote.component.html',
  styleUrls: ['./createracoesbylote.component.css']
})
export class CreateracoesbyloteComponent implements OnInit {

  private idRacao!: String;
  private idLote!: String;

  states: Racoes[] = [];

  constructor(private service: RacoesbyloteService, private serviceRacoes: RacoesService, private aroute: ActivatedRoute, private route: Router) { }

  racoeslote: RacoesbyLote = {
    tempoInicial: '',
    tempoFinal: ''
  }

  ngOnInit(): void   {
    this.idLote = this.aroute.snapshot.paramMap.get('id')!
    this.findAll()
  }

  findAll() {
    this.serviceRacoes.findAll().subscribe(resposta => {
      this.states = resposta;
    })
  }

  create(): void {
    if(this.racoeslote.tempoInicial != "")
    {
      if(this.idRacao != null)
      {
        this.service.create(this.racoeslote,this.idRacao,this.idLote).subscribe((resposta) => {
          this.route.navigate([`lote/racoes/${this.idLote}`])
          this.service.mensagem(`Realizado o cadastro da ração para o lote com êxito!`)
        }, err => {
          this.service.mensagem(err.error.message) 
        })
      }
      else
      {
        this.service.mensagem('Você deve selecionar alguma ração, caso não exista nenhuma, favor realizar a criação da ração.')
      }
    }
    else
    {
      this.service.mensagem('Preencha todos os campos corretamente!')
    }
  }

  cancel(): void {
    this.route.navigate([`lote/racoes/${this.idLote}`])
  }

  onkey(event: any) {
    if(event.target.name == "tempoInicial")
    {
      this.racoeslote.tempoInicial = event.target.value
    }
    else
    {
      this.racoeslote.tempoFinal = event.target.value
    }
  }

  changeClient(value: any){
    this.idRacao = value;
  }


}
