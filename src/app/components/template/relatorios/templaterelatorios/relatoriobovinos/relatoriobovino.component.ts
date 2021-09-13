import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

/**
 * @title Table with pagination
 */

export interface bovino {
  id: string;
  brinco: string;
  raca: string;
}

export interface vacinas {
  id: string;
  vacina: string;
  dosagem: string;
  dataaplicacao: string;
}

export interface pesos {
  id: string;
  peso: string;
  datapesagem: string;
}

export interface lotes {
  id: string;
  lote: string;
  dataalocacao: string;
  dataremocao: string;
}

@Component({
  selector: 'app-relatoriobovino',
  templateUrl: './relatoriobovino.component.html',
  styleUrls: ['./relatoriobovino.component.css']
})

export class RelatoriobovinoComponent implements AfterViewInit {
 
  sortedData: bovino[];

  constructor() {
    this.sortedData = this.dataSource.data;
  }
  
  displayedColumns: string[] = ['brinco', 'raca','info','acoes'];

  dataSource = new MatTableDataSource<bovino>(ELEMENT_DATA);

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
    ELEMENT_DATA.forEach(element => {
        var brinco = element.brinco.toLowerCase();
        var raca = element.raca.toLowerCase();
          if(vallen.length >=1)
          {
            if(brinco.indexOf(vallen, 0)!=0 && raca.indexOf(vallen.toLowerCase(), 0)!=0)
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

const ELEMENT_DATA: bovino[] = [
  {id: '1', brinco: '279', raca: 'Grande Porte'},
];

const ELEMENT_VACINAS: vacinas[] = [
  {id: '1', vacina: 'anticarrapaticida', dosagem: 'Grande Porte', dataaplicacao: '12/12/2021'},
];

const ELEMENT_PESOS: pesos[] = [
  {id: '1', peso: '100', datapesagem: '12/12/2021'},
];

const ELEMENT_LOTES: lotes[] = [
  {id: '1', lote: 'Ribeirao', dataalocacao: '05/12/2021', dataremocao: '12/12/2021'},
];
