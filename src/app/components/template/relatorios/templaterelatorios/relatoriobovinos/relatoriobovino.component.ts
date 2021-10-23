import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BovinosService } from './bovinos.service';
import { Bovinos } from './bovinos.model';

@Component({
  selector: 'app-relatoriobovino',
  templateUrl: './relatoriobovino.component.html',
  styleUrls: ['./relatoriobovino.component.css']
})

export class RelatoriobovinoComponent implements AfterViewInit {
 
  displayedColumns: string[] = ['brinco', 'raca','info','acoes'];
  
  bovinos: Bovinos[] = [];

  dataSource: MatTableDataSource<Bovinos>;

  constructor(private service: BovinosService ) { 
    this.dataSource = new MatTableDataSource(this.bovinos)
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