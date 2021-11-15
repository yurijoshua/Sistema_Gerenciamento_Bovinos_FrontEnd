import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Lotes } from '../../relatoriolotes/lotes.model';
import { Pastos } from '../pastos.model';
import { PastosService } from '../pastos.service';

@Component({
  selector: 'app-lotesbypasto',
  templateUrl: './lotesbypasto.component.html',
  styleUrls: ['./lotesbypasto.component.css']
})
export class LotesbypastoComponent implements AfterViewInit {

  private id!: String;
  
  displayedColumns: string[] = ['nomeLote', 'dataCriacao'];
  
  lotes: Lotes[] = [];

  pasto: Pastos = {
    nomePasto: '',
    dataCriacao: ''
  }

  dataSource: MatTableDataSource<Lotes>;

  constructor(private service: PastosService, private aroute: ActivatedRoute ) { 
    this.dataSource = new MatTableDataSource(this.lotes)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngAfterViewInit() {
    this.id = this.aroute.snapshot.paramMap.get('id')!
    this.findalllotespasto()
    this.findById(this.id)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  findalllotespasto() {
    this.service.findAllByPasto(this.id).subscribe(resposta => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  findById(id: String) {
    this.service.findById(this.id).subscribe(resposta => {
      this.pasto = resposta;
    })
  }

}
