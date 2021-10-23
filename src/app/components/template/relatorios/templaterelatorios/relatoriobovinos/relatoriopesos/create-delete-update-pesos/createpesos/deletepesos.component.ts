import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pesos } from '../../pesos.model';
import { PesosService } from '../../pesos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-deletepesos',
  templateUrl: './deletepesos.component.html',
  styleUrls: ['./deletepesos.component.css']
})
export class DeletepesosComponent implements OnInit {

  constructor(private service: PesosService, private route: Router, private aroute: ActivatedRoute, private location: Location) { }

  peso: Pesos = {
    id: '',
    peso: 0,
    dataPesagem: ''
  }

  ngOnInit(): void {
    this.peso.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.peso.id!).subscribe((resposta) => {
      this.peso.peso = resposta.peso
      this.peso.dataPesagem = resposta.dataPesagem
    })
  }

  delete(): void{
    this.service.delete(this.peso.id!).subscribe((resposta) => {
    this.location.back();
    this.service.mensagem(`Peso deletado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.location.back();
  }

}
