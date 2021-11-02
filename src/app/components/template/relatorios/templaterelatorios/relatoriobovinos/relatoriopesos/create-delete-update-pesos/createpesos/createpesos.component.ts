import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pesos } from '../../pesos.model';
import { PesosService } from '../../pesos.service';

@Component({
  selector: 'app-createpesos',
  templateUrl: './createpesos.component.html',
  styleUrls: ['./createpesos.component.css']
})

export class CreatepesosComponent implements OnInit {
  
  private id!: String;

  constructor(private service: PesosService, private aroute: ActivatedRoute, private route: Router) { }

  peso: Pesos = {
    peso: 0,
    dataPesagem: ''
  }

  ngOnInit(): void   {
    this.id = this.aroute.snapshot.paramMap.get('id')!
  }

  create(): void {
    if(this.peso.peso > 0  && this.peso.dataPesagem != null)
    {
      this.service.create(this.peso,this.id).subscribe((resposta) => {
        this.route.navigate([`peso/animal/${this.id}`])
        this.service.mensagem(`Realizdao o cadastro do peso com êxito!`)
      }, err => {
        this.service.mensagem(err.error.message) 
      })
    }
    else
    {
      this.service.mensagem('Preencha todos os campos corretamente!')
    }
    
  }

  cancel(): void {
    this.route.navigate([`peso/animal/${this.id}`])
  }

  verify(): void {
    if(this.peso.peso <= 0)
    {
      this.service.mensagem(`O peso não pode ser menor ou igual a zero!`)
    }
  }

  onkey(event: any) {
    this.peso.dataPesagem = event.target.value
  }

}

