import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Bovinos } from '../../relatoriobovinos/bovinos.model';
import { Medicacoes } from '../medicacoes.model';
import { MedicacoesService } from '../medicacoes.service';

@Component({
  selector: 'app-bovinosbymedicacao',
  templateUrl: './bovinosbymedicacao.component.html',
  styleUrls: ['./bovinosbymedicacao.component.css']
})
export class BovinosbymedicacaoComponent implements AfterViewInit {

  private id!: String;
  
  displayedColumns: string[] = ['brinco', 'raca','dataCriacao','status'];
  
  bovinos: Bovinos[] = [];

  medic: Medicacoes = {
    periodicidade: '',
    nomeMedicacao: '',
    loteMedicacao: ''
  }

  dataSource: MatTableDataSource<Bovinos>;

  constructor(private service: MedicacoesService, private aroute: ActivatedRoute ) { 
    this.dataSource = new MatTableDataSource(this.bovinos)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  ngAfterViewInit() {
    this.id = this.aroute.snapshot.paramMap.get('id')!
    this.findAllbovinosbylote()
    this.findById(this.id)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  findById(id: String) {
    this.service.findById(this.id).subscribe(resposta => {
      this.medic = resposta
    })
  }

  findAllbovinosbylote() {
    this.service.findAllByMedicacao(this.id).subscribe(resposta => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}
