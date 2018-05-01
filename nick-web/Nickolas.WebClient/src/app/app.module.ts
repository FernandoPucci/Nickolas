import { CadastroComponent } from './admin/cadastro/cadastro.component';
import { ChatIndexComponent } from './chat/index/chat-index.component';
import { StartComponent } from './chat/start/start.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgProgressModule } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IncidenteModule } from './incidente/incidente.module';
import { ChatModule } from './chat/chat.module';
import { SugestaoModule } from './sugestao/sugestao.module';
import { AdminModule } from './admin/admin.module';
import { StarRatingModule } from 'angular-star-rating';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'chat', component: ChatIndexComponent },
  { path: 'admin', component: CadastroComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ReactiveFormsModule,
    // AppRoutingModule,
    NgProgressModule,
    FormsModule,
    IncidenteModule,
    ChatModule,
    SugestaoModule,
    AdminModule,
    StarRatingModule.forRoot(),
    RouterModule.forRoot(
      routes
      //  { enableTracing: true } // <-- debugging purposes only
    )
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
