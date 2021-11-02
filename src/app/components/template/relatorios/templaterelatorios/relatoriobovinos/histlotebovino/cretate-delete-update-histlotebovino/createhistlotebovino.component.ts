import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lotes } from '../../../relatoriolotes/lotes.model';
import { LotesService } from '../../../relatoriolotes/lotes.service';
import { LoteByBovino } from '../histlotebovino.model';
import { HistlotebovinoService } from '../histlotebovino.service';

@Component({
  selector: 'app-createhistlotebovino',
  templateUrl: './createhistlotebovino.component.html',
  styleUrls: ['./createhistlotebovino.component.css']
})
export class CreatehistlotebovinoComponent implements OnInit {

  private idbov!: String;
  private idlot!: String;

  states: Lotes[] = [];

  constructor(private service: HistlotebovinoService, private serviceLotes: LotesService, private aroute: ActivatedRoute, private route: Router) { }

  lotbov: LoteByBovino = {
    tempoInicial: '',
    tempoFinal: ''
  }

  ngOnInit(): void   {
    this.idbov = this.aroute.snapshot.paramMap.get('id')!
    this.findAll()
  }

  findAll() {
    this.serviceLotes.findAll().subscribe(resposta => {
      this.states = resposta;
    })
  }

  create(): void {
    if(this.lotbov.tempoInicial != "")
    {
      if(this.idlot != null)
      {
        this.service.create(this.lotbov,this.idlot,this.idbov).subscribe((resposta) => {
          this.route.navigate([`bovino/lote/${this.idbov}`])
          this.service.mensagem(`Realizado o cadastro do Lote para o bovino com êxito!`)
        }, err => {
          this.service.mensagem(err.error.message) 
        })
      }
      else
      {
        this.service.mensagem('Você deve selecionar algum lote, caso não exista nenhum, favor realizar a criação do lote.')
      }
    }
    else
    {
      this.service.mensagem('Preencha todos os campos corretamente!')
    }
  }

  cancel(): void {
    this.route.navigate([`bovino/lote/${this.idbov}`])
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

  changeClient(value: any){
    this.idlot = value;
  }

}
