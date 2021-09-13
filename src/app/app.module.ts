import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/template/header/header.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { ContentComponent } from './components/template/content/content.component';
import { TelaloginComponent } from './components/template/telalogin/telalogin.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/template/home/home.component';
import { DadosbovinosComponent } from './components/template/dadosbovinos/dadosbovinos.component';
import { RelatoriosComponent } from './components/template/relatorios/relatorios.component';
import { RegistrarvendaComponent } from './components/template/registrarvenda/registrarvenda.component';
import { InformacoesusuarioComponent } from './components/template/informacoesusuario/informacoesusuario.component';
import { FormusuarioComponent } from './components/template/formusuario/formusuario.component';
import { RelatoriobovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriobovino.component';
import { RelatoriolotesComponent } from './components/template/relatorios/templaterelatorios/relatoriolotes/relatoriolotes.component';
import { RelatoriovendasComponent } from './components/template/relatorios/templaterelatorios/relatoriovendas/relatoriovendas.component';
import { RelatoriovacinasComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriovacinas/relatoriovacinas.component';
import { RelatoriopesosComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriopesos/relatoriopesos.component';
import { RelatoriolotesbovinoComponent } from './components/template/relatorios/templaterelatorios/relatoriobovinos/relatoriolotes/relatoriolotesbovinos.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    TelaloginComponent,
    FooterComponent,
    HomeComponent,
    DadosbovinosComponent,
    RelatoriosComponent,
    RegistrarvendaComponent,
    InformacoesusuarioComponent,
    FormusuarioComponent,
    RelatoriobovinoComponent,
    RelatoriolotesComponent,
    RelatoriovendasComponent,
    RelatoriovacinasComponent,
    RelatoriopesosComponent,
    RelatoriolotesbovinoComponent
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
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }