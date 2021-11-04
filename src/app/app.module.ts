import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/template/header/header.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { ContentComponent } from './components/template/content/content.component';
import { TelaloginComponent } from './components/template/telalogin/telalogin.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/template/home/home.component';
import { CreatebovinosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/create-delete-update-bovinos/createbovinos.component';
import { RelatoriosComponent } from './components/template/relatorios/relatorios.component';
import { RelatoriobovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriobovino.component';
import { RelatoriovendasComponent } from './components/template/relatorios/templaterelatorios/relatoriovendas/relatoriovendas.component';
import { RelatoriopesosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriopesos/relatoriopesos.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTabsModule} from '@angular/material/tabs';
import { MatSortModule} from '@angular/material/sort';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DeletebovinosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/create-delete-update-bovinos/deletebovinos.component';
import { CreatepesosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriopesos/create-delete-update-pesos/createpesos/createpesos.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { DeletepesosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriopesos/create-delete-update-pesos/createpesos/deletepesos.component';
import { UpdatebovinosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/create-delete-update-bovinos/updatebovinos.component';
import { UpdatepesosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriopesos/create-delete-update-pesos/createpesos/updatepesos.component';
import { RelatoriomedicacoesComponent } from './components/template/relatorios/templaterelatorios/relatoriomedicacoes/relatoriomedicacoes.component';
import { RelatoriolotesComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/relatoriolotes.component';
import { DeletelotesComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/create-delete-update-lotes/deletelotes.component';
import { UpdatelotesComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/create-delete-update-lotes/updatelotes.component';
import { CreatelotesComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/create-delete-update-lotes/createlotes.component';
import { CreatemedicacoesComponent } from './components/template/relatorios/templaterelatorios/relatoriomedicacoes/create-delete-update-medicacoes/createmedicacoes.component';
import { DeletemedicacoesComponent } from './components/template/relatorios/templaterelatorios/relatoriomedicacoes/create-delete-update-medicacoes/deletemedicacoes.component';
import { UpdatemedicacoesComponent } from './components/template/relatorios/templaterelatorios/relatoriomedicacoes/create-delete-update-medicacoes/updatemedicacoes.component';
import { RelatoriopastosComponent } from './components/template/relatorios/templaterelatorios/relatoriopastos/relatoriopastos.component';
import { RelatorioracoesComponent } from './components/template/relatorios/templaterelatorios/relatorioracoes/relatorioracoes.component';
import { CreatepastoComponent } from './components/template/relatorios/templaterelatorios/relatoriopastos/create-delete-update-pastos/createpasto.component';
import { DeletepastoComponent } from './components/template/relatorios/templaterelatorios/relatoriopastos/create-delete-update-pastos/deletepasto.component';
import { UpdatepastoComponent } from './components/template/relatorios/templaterelatorios/relatoriopastos/create-delete-update-pastos/updatepasto.component';
import { CreateracoesComponent } from './components/template/relatorios/templaterelatorios/relatorioracoes/create-delete-update-racoes/createracoes.component';
import { DeleteracoesComponent } from './components/template/relatorios/templaterelatorios/relatorioracoes/create-delete-update-racoes/deleteracoes.component';
import { UpdateracoesComponent } from './components/template/relatorios/templaterelatorios/relatorioracoes/create-delete-update-racoes/updateracoes.component';
import { UpdatevendasComponent } from './components/template/relatorios/templaterelatorios/relatoriovendas/create-delete-update-vendas/updatevendas.component';
import { CreatevendasComponent } from './components/template/relatorios/templaterelatorios/relatoriovendas/create-delete-update-vendas/createvendas.component';
import { DeletevendasComponent } from './components/template/relatorios/templaterelatorios/relatoriovendas/create-delete-update-vendas/deletevendas.component';
import { UpdateusuarioComponent } from './components/template/formusuario/create-delete-update-usuario/updateusuario.component';
import { CreateusuarioComponent } from './components/template/formusuario/create-delete-update-usuario/createusuario.component';
import { DeleteusuarioComponent } from './components/template/formusuario/create-delete-update-usuario/deleteusuario.component';
import { HistmedicbovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histmedicbovino/histmedicbovino.component';
import { HistlotebovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histlotebovino/histlotebovino.component';
import { CreatehistlotebovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histlotebovino/cretate-delete-update-histlotebovino/createhistlotebovino.component';
import { DeletehistlotebovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histlotebovino/cretate-delete-update-histlotebovino/deletehistlotebovino.component';
import { UpdatehistlotebovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histlotebovino/cretate-delete-update-histlotebovino/updatehistlotebovino.component';
import { CreatehistmedicbovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histmedicbovino/cretate-delete-update-histmedicbovino/createhistmedicbovino.component';
import { DeletehistmedicbovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histmedicbovino/cretate-delete-update-histmedicbovino/deletehistmedicbovino.component';
import { UpdatehistmedicbovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/histmedicbovino/cretate-delete-update-histmedicbovino/updatehistmedicbovino.component';
import {MatSelectModule} from '@angular/material/select';
import { BovinosbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/bovinosbylote/bovinosbylote.component';
import { LotesbyracaoComponent } from './components/template/relatorios/templaterelatorios/relatorioracoes/lotesbyracao/lotesbyracao.component';
import { LotesbypastoComponent } from './components/template/relatorios/templaterelatorios/relatoriopastos/lotesbypasto/lotesbypasto.component';
import { RacoesbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/racoesbylote/racoesbylote.component';
import { UpdateracoesbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/racoesbylote/create-delete-update-racoesbylote/updateracoesbylote.component';
import { CreateracoesbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/racoesbylote/create-delete-update-racoesbylote/createracoesbylote.component';
import { DeleteracoesbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/racoesbylote/create-delete-update-racoesbylote/deleteracoesbylote.component';
import { BovinosbymedicacaoComponent } from './components/template/relatorios/templaterelatorios/relatoriomedicacoes/bovinosbymedicacao/bovinosbymedicacao.component';
import { PastosbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/pastosbylote/pastosbylote.component';
import { UpdatepastosbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/pastosbylote/create-delete-update-pastosbylote/updatepastosbylote.component';
import { CreatepastosbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/pastosbylote/create-delete-update-pastosbylote/createpastosbylote.component';
import { DeletepastosbyloteComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/pastosbylote/create-delete-update-pastosbylote/deletepastosbylote.component';
import { AuthenticationComponent } from './components/template/telalogin/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    TelaloginComponent,
    FooterComponent,
    HomeComponent,
    CreatebovinosComponent,
    DeletebovinosComponent,
    RelatoriosComponent,
    RelatoriobovinoComponent,
    RelatoriovendasComponent,
    RelatoriopesosComponent,
    CreatepesosComponent,
    DeletepesosComponent,
    UpdatebovinosComponent,
    UpdatepesosComponent,
    RelatoriomedicacoesComponent,
    RelatoriolotesComponent,
    DeletelotesComponent,
    UpdatelotesComponent,
    CreatelotesComponent,
    CreatemedicacoesComponent,
    DeletemedicacoesComponent,
    UpdatemedicacoesComponent,
    RelatoriopastosComponent,
    RelatorioracoesComponent,
    CreatepastoComponent,
    DeletepastoComponent,
    UpdatepastoComponent,
    UpdateracoesComponent,
    CreateracoesComponent,
    DeleteracoesComponent,
    CreatevendasComponent,
    DeletevendasComponent,
    UpdatevendasComponent,
    CreateusuarioComponent,
    DeleteusuarioComponent,
    UpdateusuarioComponent,
    HistmedicbovinoComponent,
    HistlotebovinoComponent,
    CreatehistmedicbovinoComponent,
    DeletehistmedicbovinoComponent,
    UpdatehistmedicbovinoComponent,
    UpdatehistlotebovinoComponent,
    CreatehistlotebovinoComponent,
    DeletehistlotebovinoComponent,
    BovinosbyloteComponent,
    LotesbyracaoComponent,
    LotesbypastoComponent,
    RacoesbyloteComponent,
    CreateracoesbyloteComponent,
    DeleteracoesbyloteComponent,
    UpdateracoesbyloteComponent,
    BovinosbymedicacaoComponent,
    PastosbyloteComponent,
    CreatepastosbyloteComponent,
    DeletepastosbyloteComponent,
    UpdatepastosbyloteComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }