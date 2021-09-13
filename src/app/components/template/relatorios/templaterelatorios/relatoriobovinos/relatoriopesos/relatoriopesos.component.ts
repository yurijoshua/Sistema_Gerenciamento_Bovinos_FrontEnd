import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

/**
 * @title Table with pagination
 */

export interface pesos {
  id: string;
  peso: string;
  datapesagem: string;
}

@Component({
  selector: 'app-relatoriopesos',
  templateUrl: './relatoriopesos.component.html',
  styleUrls: ['./relatoriopesos.component.css']
})

export class RelatoriopesosComponent implements AfterViewInit {
 
  sortedData: pesos[];

  constructor() {
    this.sortedData = this.dataSource.data;
  }
  
  displayedColumns: string[] = ['peso','datapesagem'];

  dataSource = new MatTableDataSource<pesos>(ELEMENT_PESOS);

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
    ELEMENT_PESOS.forEach(element => {
        var datapesagem = element.datapesagem.toLowerCase();
          if(vallen.length >=1)
          {
            if(datapesagem.indexOf(vallen.toLowerCase(), 0)!=0)
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

const ELEMENT_PESOS: pesos[] = [
  {id: '1', peso: '100', datapesagem: '12/12/2021'},
];