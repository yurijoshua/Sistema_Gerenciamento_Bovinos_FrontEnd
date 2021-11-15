import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-createusuario',
  templateUrl: './createusuario.component.html',
  styleUrls: ['./createusuario.component.css']
})
export class CreateusuarioComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'usuario', 'senha', 'dataCriacao','acoes'];
  
  user: Usuario[] = [];

  dataSource: MatTableDataSource<Usuario>;

  constructor(private service: UsuarioService, private route: Router)  
  {   
    this.dataSource = new MatTableDataSource(this.user);
  }

  usuario: Usuario = {
    nome: '',
    usuario: '',
    senha: '',
    dataCriacao: ''
  }

  ngOnInit(): void {
    this.findAll();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  create(): void {
    if(this.usuario.nome != '' && this.usuario.usuario != '' && this.usuario.senha != '')
    {   
      this.service.create(this.usuario).subscribe((resposta) => {
        this.route.navigate(['usuario/create'])
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
