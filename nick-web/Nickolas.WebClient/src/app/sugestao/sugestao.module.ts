import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SugeIndexComponent } from './index/suge-index.component';
import { SugeRegisterComponent } from './register/suge-register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SugeIndexComponent, SugeRegisterComponent]
})
export class SugestaoModule { }
