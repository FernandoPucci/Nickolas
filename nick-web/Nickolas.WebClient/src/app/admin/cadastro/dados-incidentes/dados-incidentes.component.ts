import { FilterAdminPipe } from './../../../pipes/filter-admin.pipe';
import { DadosIncidentesService } from './dados-incidentes.service';
import { NgProgress } from 'ngx-progressbar';
import { Component,
         OnInit, 
         Input, 
         OnChanges, 
         Output,
         EventEmitter,
         DoCheck } from '@angular/core';

const TxtBtnVerde1: string = "Salvar";
const TxtBtnVerde2: string = "Atualizar";

@Component({
  selector: 'dados-incidentes',
  templateUrl: './dados-incidentes.component.html',
  styleUrls: ['./dados-incidentes.component.css']
})

export class DadosIncidentesComponent implements OnInit, OnChanges, DoCheck {

  @Input() SeqAplicacao: number;
  @Output() BuscaSugestao = new EventEmitter();

  ListaIncidentes: any [] = [];

  var_seqerro: number;
  var_titulo: string;
  var_descricao: string;
  var_tags: string;

  DesativarBtnVerde: boolean;
  DesativarBtnAmarelo: boolean;
  DesativarBtnVermelho: boolean;
  ControleCicloVida: boolean;
  MostrarDlg: string;
  var_auxdescricao: string;
  TxtBtnVerde: string;

  constructor(private servico: DadosIncidentesService, public ngProgress: NgProgress) {
    this.SeqAplicacao = -1;
    this.MostrarDlg = "none";
    this.onLimpaIncidente();  
  }

  ngOnInit(){}

  ngOnChanges(){
    if(this.SeqAplicacao !== undefined){
      this.onIncidentePopulate(this.SeqAplicacao);
    }
  }

  ngDoCheck(){
    if(this.ListaIncidentes == null){
      this.onLimpaIncidente();
      this.BuscaSugestao.emit({seqerro:-1});
    }

    if(this.ControleCicloVida){
      this.onLimpaIncidente();
      this.onIncidentePopulate(this.SeqAplicacao);
    }
  }

  onIncidentePopulate(seqaplicacao: number){
    if(seqaplicacao == -1){
      this.onLimpaIncidente();
      this.ListaIncidentes = [];
      this.BuscaSugestao.emit({seqerro:-1});
    }else{
      this.ngProgress.start();
      this.servico.getIncidentes(seqaplicacao).subscribe(incidente => {
        if(incidente == null){
          this.ListaIncidentes = [];
        }else{
          this.ListaIncidentes = incidente;
        }
        this.ngProgress.done();
      });
    }
  }

  onIncidenteDetail(seqerro){
    var indice = this.onBuscaIndice(this.ListaIncidentes,seqerro);
    this.var_seqerro = seqerro;    
    this.var_titulo = this.ListaIncidentes[indice].titulo;
    this.var_descricao = this.ListaIncidentes[indice].descricao;
    this.var_tags = this.ListaIncidentes[indice].tags;
    this.TxtBtnVerde = TxtBtnVerde2;
    this.DesativarBtnVerde = false;
    this.DesativarBtnAmarelo = false;
    this.DesativarBtnVermelho = false;
    this.BuscaSugestao.emit({seqerro:this.var_seqerro});
  }

  onLimpaIncidente(){
    this.var_seqerro = -1;
    this.var_titulo = '';
    this.var_descricao = '';
    this.var_tags = '';
    this.TxtBtnVerde = TxtBtnVerde1;
    this.DesativarBtnVerde = true;
    this.DesativarBtnAmarelo = true;
    this.DesativarBtnVermelho = true;
    this.ControleCicloVida = false;
  }

  onBuscaIndice(objeto: any[], valor: any): number{
    for (var i = 0; i < objeto.length; i++){
      if (objeto[i].seq_erro == valor){
        return i;
      }
    }
    return -1;
  }

  onMostrarDlg(){
    this.var_auxdescricao = this.var_descricao;
    this.MostrarDlg = "block";
  }

  onSalvaDlg(){
    this.var_auxdescricao = null;
    this.MostrarDlg = "none";
  }

  onFechaDlg(){
    this.var_descricao = this.var_auxdescricao;
    this.MostrarDlg = "none";
  }

  onHabilitaBtn(){
    if(this.var_seqerro == -1){
      if(this.var_titulo != '' || this.var_descricao!= '' || this.var_tags != ''){
        this.DesativarBtnVerde = false;
        this.DesativarBtnAmarelo = false;
        this.DesativarBtnVermelho = true;
      }else{
        this.DesativarBtnVerde = true;
        this.DesativarBtnAmarelo = true;
        this.DesativarBtnVermelho = true;
      }
    }
  }

  onAtualizarIncidente(){
    let dados = JSON.stringify({titulo: this.var_titulo,
                                descricao: this.var_descricao,
                                tags: this.var_tags,
                                detalhes: " ",
                                seqErro: this.var_seqerro,
                                seqAplicacao: this.SeqAplicacao});
    
    this.ngProgress.start();
    this.servico.putIncidente(this.var_seqerro, dados)
                .subscribe(() => { 
                  this.ControleCicloVida = true;
                  this.ngProgress.done(); 
                });
  }

  onSalvarIncidente(){
    if(this.onValidaCampos()){
      // Se true então se trata de um insert, sernão de um update.
      if(this.var_seqerro == -1){
        let dados = JSON.stringify({titulo: this.var_titulo,
                                    descricao: this.var_descricao,
                                    tags: this.var_tags,
                                    detalhes: " ",
                                    seqAplicacao: this.SeqAplicacao });
        
        this.ngProgress.start();
        this.servico.postIncidente(dados)
                    .subscribe(() => { 
                      this.ControleCicloVida = true;
                      this.ngProgress.done(); 
                    });
      }else{
        this.onAtualizarIncidente();
      }  
    }else{
      alert("Todo os campos são obrigatórios");
    } 
  }

  onExcluirIncidente(){
    this.ngProgress.start();
    this.servico.deleteIncidente(this.var_seqerro)
                .subscribe(() => { 
                  this.ControleCicloVida = true;
                  this.ngProgress.done(); 
                });
  }

  onValidaCampos(): boolean{
    let controle: boolean = true;

    if(this.var_titulo == ''){
      controle = false;  
    }
    if(this.var_descricao == ''){
      controle = false;
    }
    if(this.var_tags == ''){
      controle = false;
    }
    return controle;
  }
}