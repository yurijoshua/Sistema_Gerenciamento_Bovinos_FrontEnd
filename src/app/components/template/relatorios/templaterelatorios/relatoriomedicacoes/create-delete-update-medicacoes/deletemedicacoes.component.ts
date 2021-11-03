import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Medicacoes } from '../medicacoes.model';
import { MedicacoesService } from '../medicacoes.service';

@Component({
  selector: 'app-deletemedicacoes',
  templateUrl: './deletemedicacoes.component.html',
  styleUrls: ['./deletemedicacoes.component.css']
})
export class DeletemedicacoesComponent implements OnInit {

  constructor(private service: MedicacoesService, private route: Router, private aroute: ActivatedRoute) { }

  medicacao: Medicacoes = {
    id: '',
    periodicidade: '',
    nomeMedicacao: '',
    loteMedicacao: ''
  }

  ngOnInit(): void {
    this.medicacao.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.medicacao.id!).subscribe((resposta) => {
      this.medicacao.periodicidade = resposta.periodicidade
      this.medicacao.nomeMedicacao = resposta.nomeMedicacao
      this.medicacao.loteMedicacao = resposta.loteMedicacao
    })
  }

  delete(): void{
    this.service.delete(this.medicacao.id!).subscribe((resposta) => {
    this.route.navigate([`relatorios`])
    this.service.mensagem(`MEdicação deletadd com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.route.navigate([`relatorios`])
  }

}
