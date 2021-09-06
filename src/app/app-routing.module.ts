import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosbovinosComponent } from './components/template/dadosbovinos/dadosbovinos.component';
import { FormusuarioComponent } from './components/template/formusuario/formusuario.component';
import { HomeComponent } from './components/template/home/home.component';
import { InformacoesusuarioComponent } from './components/template/informacoesusuario/informacoesusuario.component';
import { RegistrarvendaComponent } from './components/template/registrarvenda/registrarvenda.component';
import { RelatoriosComponent } from './components/template/relatorios/relatorios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dados-bovino',
    component: DadosbovinosComponent
  },
  {
    path: 'registrar-venda',
    component: RegistrarvendaComponent
  },
  {
    path: 'relatorios',
    component: RelatoriosComponent
  },
  {
    path: 'informacoes-usuario',
    component: InformacoesusuarioComponent
  },
  {
    path: 'novo-usuario',
    component: FormusuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
