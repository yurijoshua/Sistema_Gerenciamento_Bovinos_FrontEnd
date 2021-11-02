import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Bovinos } from '../../relatoriobovinos/bovinos.model';
import { LotesService } from '../lotes.service';

@Component({
  selector: 'app-bovinosbylote',
  templateUrl: './bovinosbylote.component.html',
  styleUrls: ['./bovinosbylote.component.css']
})
export class BovinosbyloteComponent implements AfterViewInit {

  private id!: String;
  
  displayedColumns: string[] = ['brinco', 'raca','dataCriacao','dataSaida'];
  
  bovinos: Bovinos[] = [];

  dataSource: MatTableDataSource<Bovinos>;

  constructor(private service: LotesService, private aroute: ActivatedRoute ) { 
    this.dataSource = new MatTableDataSource(this.bovinos)
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
    this.service.findAllbovinosbylote(this.id).subscribe(resposta => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}
