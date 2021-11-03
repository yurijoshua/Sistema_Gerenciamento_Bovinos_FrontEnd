import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-createusuario',
  templateUrl: './createusuario.component.html',
  styleUrls: ['./createusuario.component.css']
})
export class CreateusuarioComponent implements OnInit {

  constructor(private service: UsuarioService, private route: Router)  {   }

  usuario: Usuario = {
    nome: '',
    usuario: '',
    senha: '',
    dataCriacao: ''
  }

  ngOnInit(): void {

  }

  create(): void {
    if(this.usuario.nome != '' && this.usuario.usuario != '' && this.usuario.senha != '')
    {   
      this.service.create(this.usuario).subscribe((resposta) => {
        this.route.navigate(['relatorios'])
        this.service.mensagem('Usuario cadastrado com sucesso!');
      }, err => {
        this.service.mensagem(err.error.message)
      })
    }
    else
    {
      this.service.mensagem('Preencha todos os campos!')
    }
  } 
}
