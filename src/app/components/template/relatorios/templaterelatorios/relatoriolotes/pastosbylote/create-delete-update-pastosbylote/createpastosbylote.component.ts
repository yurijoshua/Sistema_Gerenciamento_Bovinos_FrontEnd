import { Component, OnInit } from '@angular/core';
import { PastosbyLote } from '../pastosbylote.model';
import { PastosbyloteService } from '../pastosbylote.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Pastos } from '../../../relatoriopastos/pastos.model';
import { PastosService } from '../../../relatoriopastos/pastos.service';

@Component({
  selector: 'app-createpastosbylote',
  templateUrl: './createpastosbylote.component.html',
  styleUrls: ['./createpastosbylote.component.css']
})
export class CreatepastosbyloteComponent implements OnInit {

  private idPasto!: String;
  private idLote!: String;

  states: Pastos[] = [];

  constructor(private service: PastosbyloteService, private serviceRacoes: PastosService, private aroute: ActivatedRoute, private route: Router, private location: Location) { }

  Pastoslote: PastosbyLote = {
    tempoInicial: '',
    tempoFinal: ''
  }

  ngOnInit(): void   {
    this.idLote = this.aroute.snapshot.paramMap.get('id')!
    this.findAll()
  }

  findAll() {
    this.serviceRacoes.findAll().subscribe(resposta => {
      console.log(resposta)
      this.states = resposta;
    })
  }

  create(): void {
    if(this.Pastoslote.tempoInicial != "")
    {
      if(this.idPasto != null)
      {
        this.service.create(this.Pastoslote,this.idPasto,this.idLote).subscribe((resposta) => {
          this.route.navigate([`lote/pastos/${this.idLote}`])
          this.service.mensagem(`Realizado o cadastro do pasto para o lote com êxito!`)
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

  changeClient(value: any){
    this.idPasto = value;
  }


}
