import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pastos } from './pastos.model';
import { PastosService } from './pastos.service';

@Component({
  selector: 'app-relatoriopastos',
  templateUrl: './relatoriopastos.component.html',
  styleUrls: ['./relatoriopastos.component.css']
})
export class RelatoriopastosComponent implements AfterViewInit {

  displayedColumns: string[] = ['nomePasto', 'dataCriacao', 'info','acoes'];
  
  pasto: Pastos[] = [];

  dataSource: MatTableDataSource<Pastos>;

  constructor(private service: PastosService ) { 
    this.dataSource = new MatTableDataSource(this.pasto)
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
