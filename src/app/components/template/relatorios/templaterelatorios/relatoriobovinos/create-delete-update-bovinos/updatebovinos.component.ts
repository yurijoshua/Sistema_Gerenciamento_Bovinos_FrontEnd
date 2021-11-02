import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bovinos } from '../bovinos.model';
import { BovinosService } from '../bovinos.service';

@Component({
  selector: 'app-updatebovinos',
  templateUrl: './updatebovinos.component.html',
  styleUrls: ['./updatebovinos.component.css']
})
export class UpdatebovinosComponent implements OnInit {

  constructor(private service: BovinosService, private route: Router, private aroute: ActivatedRoute) { }

  bovino: Bovinos = {
    id: '',
    brinco: '',
    raca: '',
    dataCriacao: '',
    dataSaida: ''
  }

  ngOnInit(): void {
    this.bovino.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.bovino.id!).subscribe((resposta) => {
      this.bovino.brinco = resposta.brinco
      this.bovino.raca = resposta.raca
      this.bovino.dataCriacao = resposta.dataCriacao
      this.bovino.dataSaida = resposta.dataSaida
    })
  }

  update(): void{
    this.service.update(this.bovino).subscribe((resposta) => {
    this.route.navigate([`relatorios`])
    this.service.mensagem(`Bovino alterado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }
  
  cancel(): void {
    this.route.navigate([`relatorios`])
  }

  onkey(event: any) {
    if(event.target.name == "dataCriacao")
    {
      this.bovino.dataCriacao = event.target.value
    }
    else
    {
      this.bovino.dataSaida = event.target.value
    }
  }

}

