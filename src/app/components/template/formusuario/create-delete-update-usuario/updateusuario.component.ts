import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-updateusuario',
  templateUrl: './updateusuario.component.html',
  styleUrls: ['./updateusuario.component.css']
})
export class UpdateusuarioComponent implements OnInit {

  constructor(private service: UsuarioService, private route: Router, private aroute: ActivatedRoute) { }

  usuario: Usuario = {
    id: '',
    nome: '',
    usuario: '',
    senha: '',
    dataCriacao: '',
  }

  ngOnInit(): void {
    this.usuario.id = this.aroute.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.usuario.id!).subscribe((resposta) => {
      this.usuario.nome = resposta.nome
      this.usuario.usuario = resposta.usuario
      this.usuario.senha = resposta.senha
      this.usuario.dataCriacao = resposta.dataCriacao
    })
  }

  update(): void{
    this.service.update(this.usuario).subscribe((resposta) => {
    this.route.navigate([`relatorios`])
    this.service.mensagem(`Bovino alterado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }
  
  cancel(): void {
    this.route.navigate([`relatorios`])
  }
}
