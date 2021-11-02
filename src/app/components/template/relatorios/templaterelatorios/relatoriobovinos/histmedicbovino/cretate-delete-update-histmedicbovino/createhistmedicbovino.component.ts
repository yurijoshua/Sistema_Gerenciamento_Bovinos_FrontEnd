import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lotes } from '../../../relatoriolotes/lotes.model';
import { LotesService } from '../../../relatoriolotes/lotes.service';
import { Medicacoes } from '../../../relatoriomedicacoes/medicacoes.model';
import { MedicacoesService } from '../../../relatoriomedicacoes/medicacoes.service';
import { MedicByBovino } from '../histmedicbovino.model';
import { HistmedicbovinoService } from '../histmedicbovino.service';

@Component({
  selector: 'app-createhistmedicbovino',
  templateUrl: './createhistmedicbovino.component.html',
  styleUrls: ['./createhistmedicbovino.component.css']
})
export class CreatehistmedicbovinoComponent implements OnInit {

  private idbov!: String;
  private idmed!: String;

  states: Medicacoes[] = [];

  constructor(private service: HistmedicbovinoService, private serviceMedic: MedicacoesService, private aroute: ActivatedRoute, private route: Router) { }

  medbov: MedicByBovino = {
    dosagem: '',
    dataAplicacao: ''
  }

  ngOnInit(): void   {
    this.idbov = this.aroute.snapshot.paramMap.get('id')!
    this.findAll();
  }

  findAll() {
    this.serviceMedic.findAll().subscribe(resposta => {
      this.states = resposta;
    })
  }

  changeClient(value: any){
    this.idmed = value;
  }

  create(): void {
    if(this.medbov.dosagem != "" && this.medbov.dataAplicacao != "")
    {
      if(this.idmed != null)
      {
        this.service.create(this.medbov,this.idmed,this.idbov).subscribe((resposta) => {
          this.route.navigate([`bovino/medicacao/${this.idbov}`])
          this.service.mensagem(`Realizado o cadastro do medicação para o bovino com êxito!`)
        }, err => {
          this.service.mensagem(err.error.message) 
        })
      }
      else
      {
        this.service.mensagem('Você deve selecionar algum medicamento, caso não exista nenhum, favor realizar a criação do medicamento.')
      }
    }
    else
    {
      this.service.mensagem('Preencha todos os campos corretamente!')
    }
    
  }

  cancel(): void {
    this.route.navigate([`bovino/medicacao/${this.idbov}`])
  }

}
