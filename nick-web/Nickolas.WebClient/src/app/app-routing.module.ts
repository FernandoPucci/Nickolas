import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './chat/start/start.component';
import { ChatIndexComponent } from './chat/index/chat-index.component';
import { CadastroComponent } from './admin/cadastro/cadastro.component';

const routes: Routes = [
    { path: '', redirectTo: '#', pathMatch: 'full' },
    { path: 'start', component: StartComponent },
    { path: 'chat', component: ChatIndexComponent },
    { path: 'admin', component: CadastroComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
