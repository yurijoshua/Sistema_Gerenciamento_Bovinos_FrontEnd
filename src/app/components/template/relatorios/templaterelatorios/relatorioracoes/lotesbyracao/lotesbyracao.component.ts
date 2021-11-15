import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Lotes } from '../../relatoriolotes/lotes.model';
import { Racoes } from '../racoes.model';
import { RacoesService } from '../racoes.service';

@Component({
  selector: 'app-lotesbyracao',
  templateUrl: './lotesbyracao.component.html',
  styleUrls: ['./lotesbyracao.component.css']
})
export class LotesbyracaoComponent implements AfterViewInit {

  private id!: String;
  
  displayedColumns: string[] = ['nomeLote', 'dataCriacao'];
  
  lotes: Lotes[] = [];

  racao: Racoes = {
    ingredientes: '',
    dataCriacao: ''
  }

  dataSource: MatTableDataSource<Lotes>;

  constructor(private service: RacoesService, private aroute: ActivatedRoute ) { 
    this.dataSource = new MatTableDataSource(this.lotes)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngAfterViewInit() {
    this.id = this.aroute.snapshot.paramMap.get('id')!
    this.findalllotesracao()
    this.findById(this.id)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  findById(id: String) {
    this.service.findById(this.id).subscribe(resposta => {
      this.racao = resposta;
    })
  }

  findalllotesracao() {
    this.service.findalllotesracao(this.id).subscribe(resposta => {
      console.log(resposta)
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
