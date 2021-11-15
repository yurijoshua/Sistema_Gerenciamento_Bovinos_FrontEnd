import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Bovinos } from '../bovinos.model';
import { BovinosService } from '../bovinos.service';
import { MedicByBovino } from './histmedicbovino.model';
import { HistmedicbovinoService } from './histmedicbovino.service';

@Component({
  selector: 'app-histmedicbovino',
  templateUrl: './histmedicbovino.component.html',
  styleUrls: ['./histmedicbovino.component.css']
})
export class HistmedicbovinoComponent implements AfterViewInit {

  private id!: String;

  displayedColumns: string[] = ['nomeMedicacao','dosagem','dataAplicacao','acoes'];
  
  medbov: MedicByBovino[] = [];

  bovino: Bovinos = {
    brinco: '',
    raca: '',
    dataCriacao: '',
    status: ''
  };

  constructor(private service: HistmedicbovinoService,  private serviceAnimal: BovinosService, private route: Router,private aroute: ActivatedRoute ) { 
    this.dataSource = new MatTableDataSource(this.medbov);
  }

  dataSource: MatTableDataSource<MedicByBovino>;
 
  ngAfterViewInit() {
    this.id = this.aroute.snapshot.paramMap.get('id')!
    this.findAll()
    this.findById(this.id)
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort;

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
      this.dataSource.sort = this.sort;
    })
  }

  findById(id: String) {
    this.serviceAnimal.findById(this.id).subscribe(resposta => {
      this.bovino = resposta;
    })
  }

  navegarParaCadastroPeso(): void {
    this.route.navigate([`bovino/medicacao/create/${window.location.pathname.split('/')[3]}`])
  }

}
