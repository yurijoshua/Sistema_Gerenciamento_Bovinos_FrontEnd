import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicacoes } from '../medicacoes.model';
import { MedicacoesService } from '../medicacoes.service';

@Component({
  selector: 'app-createmedicacoes',
  templateUrl: './createmedicacoes.component.html',
  styleUrls: ['./createmedicacoes.component.css']
})
export class CreatemedicacoesComponent implements OnInit {

  constructor(private service: MedicacoesService, private route: Router) { }

  medicacao: Medicacoes = {
    periodicidade: '',
    produtoUtilizado: '',
    loteMedicacao: ''
  }

  ngOnInit(): void {

  }

  create(): void {
    if(this.medicacao.produtoUtilizado != '' && this.medicacao.periodicidade != '' && this.medicacao.loteMedicacao != '')
    {   
      this.service.create(this.medicacao).subscribe((resposta) => {
        this.route.navigate(['relatorios'])
        this.service.mensagem('Medicação criada com sucesso!');
      })
    }
    else
    {
      this.service.mensagem('Preencha todos os campos!')
    }
  }
}
