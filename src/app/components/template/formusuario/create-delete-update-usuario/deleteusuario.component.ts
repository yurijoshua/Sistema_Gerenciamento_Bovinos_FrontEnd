import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-deleteusuario',
  templateUrl: './deleteusuario.component.html',
  styleUrls: ['./deleteusuario.component.css']
})
export class DeleteusuarioComponent implements OnInit {

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

  delete(): void{
    this.service.delete(this.usuario.id!).subscribe((resposta) => {
    this.route.navigate([`relatorios`])
    this.service.mensagem(`Bovino deletado com êxito!`);
    }, err => {
        this.service.mensagem(err.error.message)
    })
  }

  cancel(): void {
    this.route.navigate([`usuario/create`])
  }

}
