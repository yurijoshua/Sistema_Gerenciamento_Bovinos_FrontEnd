import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Bovinos } from '../bovinos.model';
import { BovinosService } from '../bovinos.service';
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

  bovino: Bovinos = {
    brinco: '',
    raca: '',
    dataCriacao: '',
    status: ''
  };
  
  constructor(private service: HistlotebovinoService,  private serviceAnimal: BovinosService, private route: Router,private aroute: ActivatedRoute ) { 
    this.dataSource = new MatTableDataSource(this.LoteByBovino);
  }

  dataSource: MatTableDataSource<LoteByBovino>;
 
  ngAfterViewInit() {
    this.id = this.aroute.snapshot.paramMap.get('id')!
    this.findAll()
    this.findById(this.id)
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

  findById(id: String) {
    this.serviceAnimal.findById(this.id).subscribe(resposta => {
      this.bovino = resposta;
    })
  }

  navegarParaCadastroPeso(): void {
    this.route.navigate([`bovino/lote/create/${window.location.pathname.split('/')[3]}`])
  }

}
