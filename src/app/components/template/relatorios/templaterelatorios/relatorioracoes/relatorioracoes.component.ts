import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Racoes } from './racoes.model';
import { RacoesService } from './racoes.service';

@Component({
  selector: 'app-relatorioracoes',
  templateUrl: './relatorioracoes.component.html',
  styleUrls: ['./relatorioracoes.component.css']
})
export class RelatorioracoesComponent implements AfterViewInit {

  displayedColumns: string[] = ['ingredientes', 'dataCriacao', 'info','acoes'];
  
  racoes: Racoes[] = [];

  dataSource: MatTableDataSource<Racoes>;

  constructor(private service: RacoesService ) { 
    this.dataSource = new MatTableDataSource(this.racoes)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngAfterViewInit() {
    this.findAll();
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
