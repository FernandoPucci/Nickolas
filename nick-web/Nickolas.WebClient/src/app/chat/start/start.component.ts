import { ChatService } from './../chat.service';
import { ChatIndexComponent } from './../index/chat-index.component';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [ChatService]
})
export class StartComponent {

  constructor(private formBuilder: FormBuilder, private router: Router, private chatService: ChatService, public ngProgress: NgProgress) {
    this.onCreateForm();
    this.onInit();
  }

  form: FormGroup;
  formInvalido = false;
  //
  PTFs: any[];
  Modulos: any[];
  Aplicacoes: any[];
  //
  Data: any = {
    seq_ptf: '',
    Modulo: '',
    Aplicacao: ''
  };

  onCreateForm(): void {
    this.form = this.formBuilder.group({
      PTF: [null, Validators.required],
      Modulo: [null, Validators.required],
      Aplicacao: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      this.formInvalido = true;
      return;
    }

    this.router.navigate(['/chat', { PTF: this.Data.seq_ptf, mod: this.Data.Modulo, app: this.Data.Aplicacao }]);
  }

  onAdmin(): void {
    this.router.navigate(['/admin']);
  }

  onInit(): void {
    /** request started */
    this.ngProgress.start();
    this.chatService.getPtf().subscribe(ptfs => {
      this.PTFs = ptfs;
      this.ngProgress.done();
    });
  }

  onPtfDDLChange() {
    if (this.Data.seq_ptf !== '') {
      this.clearDDLModule();
      this.clearDDLApplication();

      this.ngProgress.start();
      this.chatService.getModules(this.Data.seq_ptf).subscribe(modules => {
        this.Modulos = modules;
        this.ngProgress.done();
      });
    }
  }

  onModuleDDLChange() {
    if (this.Data.Modulo !== '') {
      this.ngProgress.start();

      this.clearDDLApplication();
      this.chatService.getApplications(this.Data.Modulo).subscribe(applications => {
        this.Aplicacoes = applications;
        this.ngProgress.done();
      });
    }
  }

  clearDDLModule() {
    if (this.Data.Modulo !== '') { this.Data.Modulo = ''; }
    this.Modulos = [];
  }

  clearDDLApplication() {
    if (this.Data.Aplicacao !== '') { this.Data.Aplicacao = ''; }
    this.Aplicacoes = [];
  }
}
