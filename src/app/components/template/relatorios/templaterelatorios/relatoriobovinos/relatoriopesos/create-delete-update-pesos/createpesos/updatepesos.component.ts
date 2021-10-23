import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pesos } from '../../pesos.model';
import { PesosService } from '../../pesos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updatepesos',
  templateUrl: './updatepesos.component.html',
  styleUrls: ['./updatepesos.component.css']
})
export class UpdatepesosComponent implements OnInit {

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

  update(): void{
    this.service.update(this.peso).subscribe((resposta) => {
    this.location.back();
    this.service.mensagem(`Peso alterado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.location.back();
  }

  verify(): void {
    if(this.peso.peso <= 0)
    {
      this.service.mensagem(`O peso não pode ser menor ou igual a zero!`)
    }
  }

}
