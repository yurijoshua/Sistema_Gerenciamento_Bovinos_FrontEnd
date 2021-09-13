import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

/**
 * @title Table with pagination
 */

export interface lotes {
  id: string;
  lote: string;
  dataalocacao: string;
  dataremocao: string;
}

@Component({
  selector: 'app-relatoriolotesbovino',
  templateUrl: './relatoriolotesbovino.component.html',
  styleUrls: ['./relatoriolotesbovino.component.css']
})

export class RelatoriolotesbovinoComponent implements AfterViewInit {
 
  sortedData: lotes[];

  constructor() {
    this.sortedData = this.dataSource.data;
  }
  
  displayedColumns: string[] = ['lote', 'dataalocacao','dataremocao'];

  dataSource = new MatTableDataSource<lotes>(ELEMENT_LOTES);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  Pesquisa() {    
    var i = 1
    var vallen = (<HTMLSelectElement>document.getElementById("pesquisa")).value;
    this.paginator._changePageSize(9999);  
    ELEMENT_LOTES.forEach(element => {
        var lote = element.lote.toLowerCase();
        var dataalocacao = element.dataalocacao.toLowerCase();
        var dataremocao = element.dataremocao.toLowerCase();
          if(vallen.length >=1)
          {
            if(lote.indexOf(vallen.toLowerCase(), 0)!=0 && dataalocacao.indexOf(vallen.toLowerCase(), 0)!=0 && dataremocao.indexOf(vallen.toLowerCase(), 0)!=0)
            {
              (<HTMLElement>document.querySelector("#tabela > tbody > tr:nth-child("+i+")")).classList.add('d-none');
            }
            else
            {
              (<HTMLElement>document.querySelector("#tabela > tbody > tr:nth-child("+i+")")).classList.remove('d-none');
            }
          }
          else
          {
            (<HTMLElement>document.querySelector("#tabela > tbody > tr:nth-child("+i+")")).classList.remove('d-none');
            this.paginator._changePageSize(10);  
          }
        i++
    });
  }


}

const ELEMENT_LOTES: lotes[] = [
  {id: '1', lote: 'Ribeirao', dataalocacao: '05/12/2021', dataremocao: '12/12/2021'},
];
