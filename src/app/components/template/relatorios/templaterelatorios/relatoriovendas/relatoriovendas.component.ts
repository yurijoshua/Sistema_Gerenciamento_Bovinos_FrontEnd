import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Vendas } from './vendas.model';
import { VendasService } from './vendas.service';

@Component({
  selector: 'app-relatoriovendas',
  templateUrl: './relatoriovendas.component.html',
  styleUrls: ['./relatoriovendas.component.css']
})

export class RelatoriovendasComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['registroComprador','valorArroba', 'valorLote', 'dataVenda', 'acoes'];
  
  venda: Vendas[] = [];

  dataSource: MatTableDataSource<Vendas>;

  constructor(private service: VendasService ) { 
    this.dataSource = new MatTableDataSource(this.venda)
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

