import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Pastos } from '../../relatoriopastos/pastos.model';
import { Racoes } from '../../relatorioracoes/racoes.model';
import { Lotes } from '../lotes.model';
import { LotesService } from '../lotes.service';
import { PastosbyloteService } from './pastosbylote.service';

@Component({
  selector: 'app-pastosbylote',
  templateUrl: './pastosbylote.component.html',
  styleUrls: ['./pastosbylote.component.css']
})
export class PastosbyloteComponent implements AfterViewInit {

  private id!: String;
  
  displayedColumns: string[] = ['ingredientes','tempoInicial','tempoFinal','acoes'];
  
  pastos: Pastos[] = [];

  lote: Lotes = {
    nomeLote: '',
    dataCriacao: ''
  }

  dataSource: MatTableDataSource<Pastos>;

  constructor(private service: PastosbyloteService,  private serviceLote: LotesService, private aroute: ActivatedRoute, private route: Router ) { 
    this.dataSource = new MatTableDataSource(this.pastos)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngAfterViewInit() {
    this.id = this.aroute.snapshot.paramMap.get('id')!
    this.findallpastoslote();
    this.findById(this.id)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  findallpastoslote() {
    this.service.findallpastoslote(this.id).subscribe(resposta => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  findById(id: String) {
    this.serviceLote.findById(this.id).subscribe(resposta => {
      this.lote = resposta;
    })
  }

  navegarParaCadastroRacao(): void {
    this.route.navigate([`lote/pastos/create/${this.id}`])
  }

}
