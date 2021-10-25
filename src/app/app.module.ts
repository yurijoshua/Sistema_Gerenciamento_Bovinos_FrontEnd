import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/template/header/header.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { ContentComponent } from './components/template/content/content.component';
import { TelaloginComponent } from './components/template/telalogin/telalogin.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/template/home/home.component';
import { CreatebovinosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/create-delete-update-bovinos/createbovinos.component';
import { RelatoriosComponent } from './components/template/relatorios/relatorios.component';
import { InformacoesusuarioComponent } from './components/template/informacoesusuario/informacoesusuario.component';
import { FormusuarioComponent } from './components/template/formusuario/formusuario.component';
import { RelatoriobovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriobovino.component';
import { RelatoriovendasComponent } from './components/template/relatorios/templaterelatorios/relatoriovendas/relatoriovendas.component';
import { RelatoriopesosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriopesos/relatoriopesos.component';
import { RelatoriolotesbovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriolotes/relatoriolotesbovinos.component';
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
import {MatSnackBarModule} from '@angular/material/snack-bar';
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
    InformacoesusuarioComponent,
    FormusuarioComponent,
    RelatoriobovinoComponent,
    RelatoriovendasComponent,
    RelatoriopesosComponent,
    RelatoriolotesbovinoComponent,
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
    UpdatevendasComponent
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
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }