import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatebovinosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/create-delete-update-bovinos/createbovinos.component';
import { HomeComponent } from './components/template/home/home.component';
import { RelatoriosComponent } from './components/template/relatorios/relatorios.component';
import { RelatoriopesosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriopesos/relatoriopesos.component';
import { DeletebovinosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/create-delete-update-bovinos/deletebovinos.component';
import { CreatepesosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriopesos/create-delete-update-pesos/createpesos/createpesos.component';
import { DeletepesosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriopesos/create-delete-update-pesos/createpesos/deletepesos.component';
import { UpdatebovinosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/create-delete-update-bovinos/updatebovinos.component';
import { UpdatepesosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriopesos/create-delete-update-pesos/createpesos/updatepesos.component';
import { CreatemedicacoesComponent } from './components/template/relatorios/templaterelatorios/relatoriomedicacoes/create-delete-update-medicacoes/createmedicacoes.component';
import { DeletemedicacoesComponent } from './components/template/relatorios/templaterelatorios/relatoriomedicacoes/create-delete-update-medicacoes/deletemedicacoes.component';
import { UpdatemedicacoesComponent } from './components/template/relatorios/templaterelatorios/relatoriomedicacoes/create-delete-update-medicacoes/updatemedicacoes.component';
import { CreatelotesComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/create-delete-update-lotes/createlotes.component';
import { DeletelotesComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/create-delete-update-lotes/deletelotes.component';
import { UpdatelotesComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/create-delete-update-lotes/updatelotes.component';
import { CreateracoesComponent } from './components/template/relatorios/templaterelatorios/relatorioracoes/create-delete-update-racoes/createracoes.component';
import { DeleteracoesComponent } from './components/template/relatorios/templaterelatorios/relatorioracoes/create-delete-update-racoes/deleteracoes.component';
import { UpdateracoesComponent } from './components/template/relatorios/templaterelatorios/relatorioracoes/create-delete-update-racoes/updateracoes.component';
import { CreatepastoComponent } from './components/template/relatorios/templaterelatorios/relatoriopastos/create-delete-update-pastos/createpasto.component';
import { DeletepastoComponent } from './components/template/relatorios/templaterelatorios/relatoriopastos/create-delete-update-pastos/deletepasto.component';
import { UpdatepastoComponent } from './components/template/relatorios/templaterelatorios/relatoriopastos/create-delete-update-pastos/updatepasto.component';
import { CreatevendasComponent } from './components/template/relatorios/templaterelatorios/relatoriovendas/create-delete-update-vendas/createvendas.component';
import { DeletevendasComponent } from './components/template/relatorios/templaterelatorios/relatoriovendas/create-delete-update-vendas/deletevendas.component';
import { UpdatevendasComponent } from './components/template/relatorios/templaterelatorios/relatoriovendas/create-delete-update-vendas/updatevendas.component';
import { CreateusuarioComponent } from './components/template/formusuario/create-delete-update-usuario/createusuario.component';
import { HistmedicbovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histmedicbovino/histmedicbovino.component';
import { HistlotebovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histlotebovino/histlotebovino.component';
import { DeletehistlotebovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histlotebovino/cretate-delete-update-histlotebovino/deletehistlotebovino.component';
import { UpdatehistlotebovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histlotebovino/cretate-delete-update-histlotebovino/updatehistlotebovino.component';
import { CreatehistlotebovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histlotebovino/cretate-delete-update-histlotebovino/createhistlotebovino.component';
import { CreatehistmedicbovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histmedicbovino/cretate-delete-update-histmedicbovino/createhistmedicbovino.component';
import { DeletehistmedicbovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histmedicbovino/cretate-delete-update-histmedicbovino/deletehistmedicbovino.component';
import { UpdatehistmedicbovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histmedicbovino/cretate-delete-update-histmedicbovino/updatehistmedicbovino.component';
import { BovinosbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/bovinosbylote/bovinosbylote.component';
import { LotesbyracaoComponent } from './components/template/relatorios/templaterelatorios/relatorioracoes/lotesbyracao/lotesbyracao.component';
import { RacoesbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/racoesbylote/racoesbylote.component';
import { CreateracoesbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/racoesbylote/create-delete-update-racoesbylote/createracoesbylote.component';
import { DeleteracoesbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/racoesbylote/create-delete-update-racoesbylote/deleteracoesbylote.component';
import { UpdateracoesbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/racoesbylote/create-delete-update-racoesbylote/updateracoesbylote.component';
import { LotesbypastoComponent } from './components/template/relatorios/templaterelatorios/relatoriopastos/lotesbypasto/lotesbypasto.component';
import { BovinosbymedicacaoComponent } from './components/template/relatorios/templaterelatorios/relatoriomedicacoes/bovinosbymedicacao/bovinosbymedicacao.component';
import { PastosbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/pastosbylote/pastosbylote.component';
import { CreatepastosbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/pastosbylote/create-delete-update-pastosbylote/createpastosbylote.component';
import { DeletepastosbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/pastosbylote/create-delete-update-pastosbylote/deletepastosbylote.component';
import { UpdatepastosbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/pastosbylote/create-delete-update-pastosbylote/updatepastosbylote.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'animal/create',
    component: CreatebovinosComponent
  },
  {
    path: 'lote/create',
    component: CreatelotesComponent
  },
  {
    path: 'lote/delete/:id',
    component: DeletelotesComponent
  },
  {
    path: 'lote/update/:id',
    component: UpdatelotesComponent
  },
  {
    path: 'lote/bovinos/:id',
    component: BovinosbyloteComponent
  },
  {
    path: 'lote/racoes/:id',
    component: RacoesbyloteComponent
  },
  {
    path: 'lote/racoes/update/:id',
    component: UpdateracoesbyloteComponent
  },
  {
    path: 'lote/racoes/delete/:id',
    component: DeleteracoesbyloteComponent
  },
  {
    path: 'lote/racoes/create/:id',
    component: CreateracoesbyloteComponent
  },
  {
    path: 'lote/pastos/:id',
    component: PastosbyloteComponent
  },
  {
    path: 'lote/pastos/create/:id',
    component: CreatepastosbyloteComponent
  },
  {
    path: 'lote/pastos/delete/:id',
    component: DeletepastosbyloteComponent
  },
  {
    path: 'lote/pastos/update/:id',
    component: UpdatepastosbyloteComponent
  },
  {
    path: 'peso/create/:id',
    component: CreatepesosComponent
  },
  {
    path: 'animal/delete/:id',
    component: DeletebovinosComponent
  },
  {
    path: 'peso/delete/:id',
    component: DeletepesosComponent
  },
  {
    path: 'relatorios',
    component: RelatoriosComponent
  },
  {
    path: 'usuario/create',
    component: CreateusuarioComponent
  },
  {
    path: 'peso/animal/:id',
    component: RelatoriopesosComponent
  },
  {
    path: 'bovino/lote/:id',
    component: HistlotebovinoComponent
  },
  {
    path: 'bovino/lote/create/:id',
    component: CreatehistlotebovinoComponent
  },
  {
    path: 'bovino/lote/update/:id',
    component: UpdatehistlotebovinoComponent
  },
  {
    path: 'bovino/lote/delete/:id',
    component: DeletehistlotebovinoComponent
  },
  {
    path: 'bovino/medicacao/:id',
    component: HistmedicbovinoComponent
  },
  {
    path: 'bovino/medicacao/create/:id',
    component: CreatehistmedicbovinoComponent
  },
  {
    path: 'bovino/medicacao/update/:id',
    component: UpdatehistmedicbovinoComponent
  },
  {
    path: 'bovino/medicacao/delete/:id',
    component: DeletehistmedicbovinoComponent
  },
  {
    path: 'animal/update/:id',
    component: UpdatebovinosComponent
  },
  {
    path: 'peso/update/:id',
    component: UpdatepesosComponent
  },
  {
    path: 'medicacao/create',
    component: CreatemedicacoesComponent
  },
  {
    path: 'medicacao/delete/:id',
    component: DeletemedicacoesComponent
  },
  {
    path: 'medicacao/update/:id',
    component: UpdatemedicacoesComponent
  },
  {
    path: 'medicacao/lotes/:id',
    component: BovinosbymedicacaoComponent
  },
  {
    path: 'racao/create',
    component: CreateracoesComponent
  },
  {
    path: 'racao/delete/:id',
    component: DeleteracoesComponent
  },
  {
    path: 'racao/update/:id',
    component: UpdateracoesComponent
  },
  {
    path: 'racao/bovinos/:id',
    component: LotesbyracaoComponent
  },
  {
    path: 'pasto/create',
    component: CreatepastoComponent
  },
  {
    path: 'pasto/delete/:id',
    component: DeletepastoComponent
  },
  {
    path: 'pasto/update/:id',
    component: UpdatepastoComponent
  },
  {
    path: 'pasto/lotes/:id',
    component: LotesbypastoComponent
  },
  {
    path: 'venda/create',
    component: CreatevendasComponent
  },
  {
    path: 'venda/delete/:id',
    component: DeletevendasComponent
  },
  {
    path: 'venda/update/:id',
    component: UpdatevendasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
