import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dadosbovinos',
  templateUrl: './dadosbovinos.component.html',
  styleUrls: ['./dadosbovinos.component.css']
})

export class DadosbovinosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void   {
    this.addFieldsVacina();
    this.addFieldsLotes();
    this.addFieldsPesagem();
  }
  
  addFieldsVacina(){
      let container = (<HTMLSelectElement>document.getElementById("containervacinas"));
      container.innerHTML += '<div class="row"> <div class="form-group col-md-4 pt-3 pt-lg-1"> <label > Escolher vacina </label> <select class="form-control" > <option value="vacina"> Vacina 1 </option><option value="vacina"> Vacina 2 </option> <option value="vacina"> Vacina 3 </option><option value="vacina"> Vacina 4 </option> </select></div><div class="form-group col-md-4 pt-3 pt-lg-1"> <label > Dosagem </label> <input type="number" class="form-control"  value="0"> </div>  <div class="form-group col-md-4 pt-3 pt-lg-1"> <label> Data de Aplicação </label>  <input type="date" class="form-control"> </div>  </div>';        
  }

  removeFieldsVacina()
  {
      let container = (<HTMLSelectElement>document.getElementById("containervacinas"));
      let lastChild = container.lastChild;
      if (lastChild) 
      {
        container.removeChild(lastChild)
      }
  }

  addFieldsLotes()
  {
      let container = (<HTMLSelectElement>document.getElementById("containerlotes"));
      container.innerHTML += '<div class="row"> <div class="form-group col-md-4 pt-3 pt-lg-1"> <label > Escolher lote </label> <select class="form-control"><option value="vacina"> Lote 1 </option> <option value="vacina"> Lote 2 </option> <option value="vacina"> Lote 3 </option> <option value="vacina"> Lote 4 </option> </select> </div> <div class="form-group col-md-4 pt-3 pt-lg-1"> <label > Data de alocação do lote </label> <input type="date" class="form-control"> </div> <div class="form-group col-md-4 pt-3 pt-lg-1"> <label> Data de remoção do lote </label> <input type="date" class="form-control"> </div> </div>';        
  }

  removeFieldsLotes()
  {
      let container = (<HTMLSelectElement>document.getElementById("containerlotes"));
      let lastChild = container.lastChild;
      if (lastChild) 
      {
        container.removeChild(lastChild)
      }
  }

  addFieldsPesagem()
  {
    let container = (<HTMLSelectElement>document.getElementById("containerpesagem"));
    container.innerHTML += '<div class="row"> <div class="form-group col-lg-2 pt-3 pt-lg-1"> <label Peso </label> <input type="text" class="form-control" placeholder="Peso"> </div> <div class="form-group col-lg-3 pt-3 pt-lg-1"> <label Data da pesagem </label> <input type="date" class="form-control"> </div>';        
  }

  removeFieldsPesagem()
  {
      let container = (<HTMLSelectElement>document.getElementById("containerpesagem"));
      let lastChild = container.lastChild;
      if (lastChild) 
      {
        container.removeChild(lastChild)
      }
  }
}
