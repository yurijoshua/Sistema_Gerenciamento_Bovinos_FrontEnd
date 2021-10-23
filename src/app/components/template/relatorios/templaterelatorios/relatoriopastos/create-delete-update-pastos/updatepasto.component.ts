import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pastos } from '../pastos.model';
import { PastosService } from '../pastos.service';

@Component({
  selector: 'app-updatepasto',
  templateUrl: './updatepasto.component.html',
  styleUrls: ['./updatepasto.component.css']
})
export class UpdatepastoComponent implements OnInit {

  constructor(private service: PastosService, private route: Router, private aroute: ActivatedRoute) { }

  pasto: Pastos = {
    id: '',
    nomePasto: '',
    dataCriacao: ''
  }

  ngOnInit(): void {
    this.pasto.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.pasto.id!).subscribe((resposta) => {
      this.pasto.nomePasto = resposta.nomePasto
      this.pasto.dataCriacao = resposta.dataCriacao
    })
  }

  update(): void{
    this.service.update(this.pasto).subscribe((resposta) => {
    this.route.navigate([`relatorios`])
    this.service.mensagem(`Pasto alterado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.route.navigate([`relatorios`])
  }
}
