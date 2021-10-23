import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Racoes } from '../racoes.model';
import { RacoesService } from '../racoes.service';

@Component({
  selector: 'app-updateracoes',
  templateUrl: './updateracoes.component.html',
  styleUrls: ['./updateracoes.component.css']
})
export class UpdateracoesComponent implements OnInit {

  constructor(private service: RacoesService, private route: Router, private aroute: ActivatedRoute) { }

  racao: Racoes = {
    id: '',
    ingredientes: '',
    dataCriacao: ''
  }

  ngOnInit(): void {
    this.racao.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.racao.id!).subscribe((resposta) => {
      this.racao.ingredientes = resposta.ingredientes
      this.racao.dataCriacao = resposta.dataCriacao
    })
  }

  update(): void{
    this.service.update(this.racao).subscribe((resposta) => {
    this.route.navigate([`relatorios`])
    this.service.mensagem(`Ração alterada com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.route.navigate([`relatorios`])
  }
}
