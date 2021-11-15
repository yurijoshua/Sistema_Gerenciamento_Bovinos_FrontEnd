import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Racoes } from '../../relatorioracoes/racoes.model';
import { RacoesService } from '../../relatorioracoes/racoes.service';
import { Lotes } from '../lotes.model';
import { LotesService } from '../lotes.service';
import { RacoesbyloteService } from './racoesbylote.service';

@Component({
  selector: 'app-racoesbylote',
  templateUrl: './racoesbylote.component.html',
  styleUrls: ['./racoesbylote.component.css']
})

export class RacoesbyloteComponent implements AfterViewInit {

  private id!: String;
  
  displayedColumns: string[] = ['ingredientes','tempoInicial','tempoFinal','acoes'];
  
  racoes: Racoes[] = [];

  lote: Lotes = {
    nomeLote: '',
    dataCriacao: ''
  }


  dataSource: MatTableDataSource<Racoes>;

  constructor(private service: RacoesbyloteService, private serviceLote: LotesService, private aroute: ActivatedRoute, private route: Router ) { 
    this.dataSource = new MatTableDataSource(this.racoes)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngAfterViewInit() {
    this.id = this.aroute.snapshot.paramMap.get('id')!
    this.findalllotesracao()
    this.findById(this.id)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  findalllotesracao() {
    this.service.findallracoeslote(this.id).subscribe(resposta => {
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
    this.route.navigate([`lote/racoes/create/${this.id}`])
  }

}
