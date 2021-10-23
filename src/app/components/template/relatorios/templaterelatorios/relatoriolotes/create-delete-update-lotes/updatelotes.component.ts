import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Lotes } from '../lotes.model';
import { LotesService } from '../lotes.service';

@Component({
  selector: 'app-updatelotes',
  templateUrl: './updatelotes.component.html',
  styleUrls: ['./updatelotes.component.css']
})
export class UpdatelotesComponent implements OnInit {

  constructor(private service: LotesService, private route: Router, private aroute: ActivatedRoute) { }

  lote: Lotes = {
    id: '',
    nomeLote: '',
    dataCriacao: ''
  }

  ngOnInit(): void {
    this.lote.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.lote.id!).subscribe((resposta) => {
      this.lote.nomeLote = resposta.nomeLote
      this.lote.dataCriacao = resposta.dataCriacao
    })
  }

  update(): void{
    this.service.update(this.lote).subscribe((resposta) => {
    this.route.navigate([`relatorios`])
    this.service.mensagem(`Lote alterado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.route.navigate([`relatorios`])
  }

}
