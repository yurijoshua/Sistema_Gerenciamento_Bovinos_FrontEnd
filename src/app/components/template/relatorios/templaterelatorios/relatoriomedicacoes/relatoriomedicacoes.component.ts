import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Medicacoes } from './medicacoes.model';
import { MedicacoesService } from './medicacoes.service';

@Component({
  selector: 'app-relatoriomedicacoes',
  templateUrl: './relatoriomedicacoes.component.html',
  styleUrls: ['./relatoriomedicacoes.component.css']
})
export class RelatoriomedicacoesComponent implements AfterViewInit {

  displayedColumns: string[] = ['produtoUtilizado', 'periodicidade', 'loteMedicacao','info','acoes'];
  
  medicacao: Medicacoes[] = [];

  dataSource: MatTableDataSource<Medicacoes>;

  constructor(private service: MedicacoesService ) { 
    this.dataSource = new MatTableDataSource(this.medicacao)
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
