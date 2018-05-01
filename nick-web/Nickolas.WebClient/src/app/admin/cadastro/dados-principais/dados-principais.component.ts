import { DadosPrincipaisService } from './dados-principais.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'dados-principais',
  templateUrl: './dados-principais.component.html',
  styleUrls: ['./dados-principais.component.css'],
  providers: [DadosPrincipaisService]
})
export class DadosPrincipaisComponent implements OnInit {
  
  DadosPTF: any = [];
  DadosModulo: any [];
  DadosAplicacao: any [];

  var_ptf: number;
  var_modulo: number;
  var_aplicacao: number;

  @Output() BuscaIncidente = new EventEmitter();

  constructor(private servico: DadosPrincipaisService, public ngProgress: NgProgress) {
    this.onPtfPopulate();
  }

  ngOnInit() { }

  onPtfPopulate() {
    this.ngProgress.start();
    this.servico.getPTF().subscribe(ptfs => {
      this.DadosPTF = ptfs;
      this.ngProgress.done();
    });
  }

  onModuloPopulate(ptf) {
    this.ngProgress.start();
    this.servico.getModulo(ptf).subscribe(modulo => {
      this.DadosModulo = modulo;
      this.ngProgress.done();
    });
  }

  onAplicacaoPopulate(modulo) {
    this.ngProgress.start();
    this.servico.getAplicacao(modulo).subscribe(aplicacao => {
      this.DadosAplicacao = aplicacao;
      this.ngProgress.done();
    });
  }

  onPtfChange(seq_ptf){
     this.var_ptf = seq_ptf;
     this.onModuloPopulate(this.var_ptf);
     this.DadosAplicacao = [];
     this.onAplicacaoChange(-1);
   }

  onModuloChange(seq_modulo){
     this.var_modulo = seq_modulo;
     this.onAplicacaoPopulate(this.var_modulo);
     this.onAplicacaoChange(-1);
   }

  onAplicacaoChange(seq_aplicacao) {
    if(seq_aplicacao == 0 || seq_aplicacao == -1){
      this.var_aplicacao = -1;
    }else{
      this.var_aplicacao = seq_aplicacao;
    }
    this.BuscaIncidente.emit({ seqaplicacao: this.var_aplicacao });
  }

}
