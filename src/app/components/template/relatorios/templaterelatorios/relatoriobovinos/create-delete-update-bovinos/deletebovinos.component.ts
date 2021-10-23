import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bovinos } from '../bovinos.model';
import { BovinosService } from '../bovinos.service';

@Component({
  selector: 'app-deletebovinos',
  templateUrl: './deletebovinos.component.html',
  styleUrls: ['./deletebovinos.component.css']
})
export class DeletebovinosComponent implements OnInit {

  constructor(private service: BovinosService, private route: Router, private aroute: ActivatedRoute) { }

  bovino: Bovinos = {
    id: '',
    brinco: '',
    raca: ''
  }

  ngOnInit(): void {
    this.bovino.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.bovino.id!).subscribe((resposta) => {
      this.bovino.raca = resposta.brinco
      this.bovino.brinco = resposta.raca
    })
  }

  delete(): void{
    this.service.delete(this.bovino.id!).subscribe((resposta) => {
    this.route.navigate([`relatorios`])
    this.service.mensagem(`Bovino deletado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.route.navigate([`relatorios`])
  }

}
