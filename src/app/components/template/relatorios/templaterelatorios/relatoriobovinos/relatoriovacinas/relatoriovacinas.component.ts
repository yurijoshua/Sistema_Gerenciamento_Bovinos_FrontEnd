import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

/**
 * @title Table with pagination
 */

export interface vacinas {
  id: string;
  vacina: string;
  dosagem: string;
  dataaplicacao: string;
}

@Component({
  selector: 'app-relatoriovacinas',
  templateUrl: './relatoriovacinas.component.html',
  styleUrls: ['./relatoriovacinas.component.css']
})

export class RelatoriovacinasComponent implements AfterViewInit {

  sortedData: vacinas[];

  constructor() {
    this.sortedData = this.dataSource.data;
  }
  
  displayedColumns: string[] = ['vacina', 'dosagem','dataaplicacao'];

  dataSource = new MatTableDataSource<vacinas>(ELEMENT_VACINAS);

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
    ELEMENT_VACINAS.forEach(element => {
        var vacina = element.vacina.toLowerCase();
          if(vallen.length >=1)
          {
            if(vacina.indexOf(vallen.toLowerCase(), 0)!=0)
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

const ELEMENT_VACINAS: vacinas[] = [
  {id: '3', vacina: 'vacina1', dosagem: '100', dataaplicacao: '12/12/2021'},
  {id: '3', vacina: 'vacina2', dosagem: '100', dataaplicacao: '12/12/2021'},
  {id: '3', vacina: 'vacina2', dosagem: '100', dataaplicacao: '12/12/2021'},
  {id: '3', vacina: 'vacina3', dosagem: '100', dataaplicacao: '12/12/2021'},
];
