import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { LoteByBovino } from './histlotebovino.model';
import { HistlotebovinoService } from './histlotebovino.service';

@Component({
  selector: 'app-histlotebovino',
  templateUrl: './histlotebovino.component.html',
  styleUrls: ['./histlotebovino.component.css']
})
export class HistlotebovinoComponent implements AfterViewInit {

  private id!: String;

  displayedColumns: string[] = ['nomeLote','tempoInicial','tempoFinal','acoes'];
  
  LoteByBovino: LoteByBovino[] = [];
  
  constructor(private service: HistlotebovinoService, private route: Router,private aroute: ActivatedRoute ) { 
    this.dataSource = new MatTableDataSource(this.LoteByBovino);
  }

  dataSource: MatTableDataSource<LoteByBovino>;
 
  ngAfterViewInit() {
    this.id = this.aroute.snapshot.paramMap.get('id')!
    this.findAll()
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator; 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  findAll() {
    this.service.findAll(this.id).subscribe(resposta => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  navegarParaCadastroPeso(): void {
    this.route.navigate([`bovino/lote/create/${window.location.pathname.split('/')[3]}`])
  }

}
