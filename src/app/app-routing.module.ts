import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosbovinosComponent } from './components/template/dadosbovinos/dadosbovinos.component';
import { FormusuarioComponent } from './components/template/formusuario/formusuario.component';
import { HomeComponent } from './components/template/home/home.component';
import { InformacoesusuarioComponent } from './components/template/informacoesusuario/informacoesusuario.component';
import { RegistrarvendaComponent } from './components/template/registrarvenda/registrarvenda.component';
import { RelatoriosComponent } from './components/template/relatorios/relatorios.component';
import { RelatoriolotesbovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriolotes/relatoriolotesbovinos.component';
import { RelatoriopesosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriopesos/relatoriopesos.component';
import { RelatoriovacinasComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriovacinas/relatoriovacinas.component';

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
    path: 'editar-bovino/:id',
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
  },
  {
    path: 'vacina-bovino/:id',
    component: RelatoriovacinasComponent
  },
  {
    path: 'peso-bovino/:id',
    component: RelatoriopesosComponent
  },
  {
    path: 'lote-bovino/:id',
    component: RelatoriolotesbovinoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
