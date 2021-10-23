import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Racoes } from '../racoes.model';
import { RacoesService } from '../racoes.service';

@Component({
  selector: 'app-deleteracoes',
  templateUrl: './deleteracoes.component.html',
  styleUrls: ['./deleteracoes.component.css']
})
export class DeleteracoesComponent implements OnInit {

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

  delete(): void{
    this.service.delete(this.racao.id!).subscribe((resposta) => {
    this.route.navigate([`relatorios`])
    this.service.mensagem(`Racão deletada com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.route.navigate([`relatorios`])
  }

}
