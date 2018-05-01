import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from 'ngx-progressbar';
import { CommonModule } from '@angular/common';

import { CadastroComponent } from './cadastro/cadastro.component';
import { DadosSugestoesComponent } from './cadastro/dados-sugestoes/dados-sugestoes.component';
import { DadosPrincipaisComponent } from './cadastro/dados-principais/dados-principais.component';
import { DadosIncidentesComponent } from './cadastro/dados-incidentes/dados-incidentes.component';

import { DadosSugestoesService } from './cadastro/dados-sugestoes/dados-sugestoes.service';
import { DadosPrincipaisService } from './cadastro/dados-principais/dados-principais.service';
import { DadosIncidentesService } from './cadastro/dados-incidentes/dados-incidentes.service';

import { FilterAdminPipe } from './../pipes/filter-admin.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgProgressModule
  ],
  declarations: [
    CadastroComponent,
    DadosIncidentesComponent,
    DadosPrincipaisComponent,
    DadosSugestoesComponent,
    FilterAdminPipe
  ],
  providers:[
    DadosIncidentesService,
    DadosPrincipaisService,
    DadosSugestoesService
  ]
})
export class AdminModule { }
