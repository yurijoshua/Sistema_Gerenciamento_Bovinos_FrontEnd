import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Lotes } from './lotes.model';
import { LotesService } from './lotes.service';

@Component({
  selector: 'app-relatoriolotes',
  templateUrl: './relatoriolotes.component.html',
  styleUrls: ['./relatoriolotes.component.css']
})
export class RelatoriolotesComponent implements AfterViewInit {

  displayedColumns: string[] = ['nomeLote', 'dataCriacao','info','acoes'];
  
  lotes: Lotes[] = [];

  dataSource: MatTableDataSource<Lotes>;

  constructor(private service: LotesService ) { 
    this.dataSource = new MatTableDataSource(this.lotes)
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
