import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicByBovino } from '../histmedicbovino.model';
import { HistmedicbovinoService } from '../histmedicbovino.service';
import { Lotes } from '../../../relatoriolotes/lotes.model';
import { LotesService } from '../../../relatoriolotes/lotes.service';

@Component({
  selector: 'app-updatehistmedicbovino',
  templateUrl: './updatehistmedicbovino.component.html',
  styleUrls: ['./updatehistmedicbovino.component.css']
})
export class UpdatehistmedicbovinoComponent implements OnInit {

  constructor(private service: HistmedicbovinoService, private route: Router, private aroute: ActivatedRoute, private location: Location) { }

  private idmed!: String;

  medbov: MedicByBovino = {
    id: '',
    dosagem: '',
    dataAplicacao: ''
  }

  states: Lotes[] = [];

  ngOnInit(): void {
    this.medbov.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.medbov.id!).subscribe((resposta) => {
      this.medbov.dosagem = resposta.dosagem
      this.medbov.dataAplicacao = resposta.dataAplicacao
    })
  }

  update(): void{
    this.service.update(this.medbov).subscribe((resposta) => {
    this.location.back();
    this.service.mensagem(`Medicação do bovino alterado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.location.back();
  }

}
