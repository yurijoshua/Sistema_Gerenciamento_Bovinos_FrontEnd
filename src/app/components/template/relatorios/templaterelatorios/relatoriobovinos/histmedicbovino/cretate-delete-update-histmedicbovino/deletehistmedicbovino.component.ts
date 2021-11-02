import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicByBovino } from '../histmedicbovino.model';
import { HistmedicbovinoService } from '../histmedicbovino.service';

@Component({
  selector: 'app-deletehistmedicbovino',
  templateUrl: './deletehistmedicbovino.component.html',
  styleUrls: ['./deletehistmedicbovino.component.css']
})
export class DeletehistmedicbovinoComponent implements OnInit {

  constructor(private service: HistmedicbovinoService, private route: Router, private aroute: ActivatedRoute, private location: Location) { }

  medbov: MedicByBovino = {
    id: '',
    dosagem: '',
    dataAplicacao: ''
  }

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

  delete(): void{
    this.service.delete(this.medbov.id!).subscribe((resposta) => {
    this.location.back();
    this.service.mensagem(`Medicação do bovino deletado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.location.back();
  }

}
