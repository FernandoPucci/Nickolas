import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InciIndexComponent } from './index/inci-index.component';
import { InciRegisterComponent } from './register/inci-register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InciIndexComponent, InciRegisterComponent]
})
export class IncidenteModule { }
