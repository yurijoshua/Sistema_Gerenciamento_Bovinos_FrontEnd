import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Pesos } from './pesos.model';
import { PesosService } from './pesos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-relatoriopesos',
  templateUrl: './relatoriopesos.component.html',
  styleUrls: ['./relatoriopesos.component.css']
})

export class RelatoriopesosComponent  implements AfterViewInit {
 
  private id!: String;

  displayedColumns: string[] = ['peso','datapesagem','acoes'];
  
  pesos: Pesos[] = [];

  constructor(private service: PesosService, private route: Router,private aroute: ActivatedRoute ) { 
    this.dataSource = new MatTableDataSource(this.pesos);
  }

  dataSource: MatTableDataSource<Pesos>;
 
  ngAfterViewInit() {
    this.id = this.aroute.snapshot.paramMap.get('id')!
    this.findAll()
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  findAll() {
    this.service.findAll(this.id).subscribe(resposta => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  navegarParaCadastroPeso(): void {
    this.route.navigate([`peso/create/${this.id}`])
  }
}