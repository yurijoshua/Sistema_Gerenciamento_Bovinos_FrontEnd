import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Lotes } from '../../relatoriolotes/lotes.model';
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

  dataSource: MatTableDataSource<Lotes>;

  constructor(private service: RacoesService, private aroute: ActivatedRoute ) { 
    this.dataSource = new MatTableDataSource(this.lotes)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngAfterViewInit() {
    this.id = this.aroute.snapshot.paramMap.get('id')!
    this.findAllbovinosbylote();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  findAllbovinosbylote() {
    this.service.findallracoesbovino(this.id).subscribe(resposta => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
