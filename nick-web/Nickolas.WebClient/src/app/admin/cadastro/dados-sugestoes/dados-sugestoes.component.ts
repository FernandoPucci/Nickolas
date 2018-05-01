import { FilterAdminPipe } from './../../../pipes/filter-admin.pipe';
import { DadosSugestoesService } from './dados-sugestoes.service';
import { NgProgress } from 'ngx-progressbar';
import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

const TxtBtnVerde1: string = "Salvar";
const TxtBtnVerde2: string = "Atualizar";

@Component({
  selector: 'dados-sugestoes',
  templateUrl: './dados-sugestoes.component.html',
  styleUrls: ['./dados-sugestoes.component.css']
})
export class DadosSugestoesComponent implements OnInit, OnChanges, DoCheck {

  ListaSugestao: any[] = [];
  ListaSugestaoGlobal: any[] = [];
  Rating: any[] = [];

  @Input() SeqIncidente: number;

  var_seqsugestaoerro: number;
  var_seqsugestao: number;
  var_sugestao: string;
  var_detalhes: string;
  var_contorno: number;

  DesativarBtnVerde: boolean;
  DesativarBtnAmarelo: boolean;
  DesativarBtnVermelho: boolean;
  ControleCicloVida: boolean;
  MostrarDescricao: boolean;
  MostrarDlg: string;
  var_auxdescricao: string;
  TxtBtnVerde: string;
  corRating: string;
  ValorRating: any;
  seqSugestaoAux: number;

  constructor( private servico: DadosSugestoesService, public ngProgress: NgProgress){
    this.SeqIncidente = -1;
    this.MostrarDlg = "none";
    this.onLimpaSugestao();
  }

  ngOnInit() { }

  ngOnChanges(){
    if(this.SeqIncidente !== undefined){
      this.onSugestoesPopulate();
    }
  }

  ngDoCheck(){
    if(this.ListaSugestao == null){
      this.onLimpaSugestao();
    }
 
    if(this.Rating != null && this.Rating.length > 0){
      this.ValorRating = this.Rating[0].rating_medio;
    }else{
      this.ValorRating = 0;
    }

    if(this.ValorRating > 0 && this.ValorRating <= 2){
      this.corRating = "red";
    }else if(this.ValorRating > 2 && this.ValorRating < 4){
      this.corRating = "yellow";
    }else if(this.ValorRating >= 4 && this.ValorRating <= 5){
      this.corRating = "green";
    }else{
      this.corRating = "black";
    }

    if(this.ControleCicloVida){
      this.onSugestoesPopulate();
    }
  }

  onSugestoesPopulate(){
    this.onLimpaSugestao();
    if (this.SeqIncidente == -1) {      
      this.ListaSugestao = [];
    }else{
      this.ngProgress.start();
      this.servico.getSugestoes(this.SeqIncidente).subscribe(sugestao => {
        if(sugestao == null){
          this.ListaSugestao = [];
        }else{
          this.ListaSugestao = sugestao;
        }
        this.ngProgress.done();
      });   
    }
  }

  onSugestaoDetail(sugestao){
    var indice = this.onBuscaIndice2(this.ListaSugestao,sugestao);
    this.var_seqsugestaoerro = this.ListaSugestao[indice].seq_sugestao_erro;
    this.var_seqsugestao = this.ListaSugestao[indice].seq_sugestao;
    this.var_sugestao = this.ListaSugestao[indice].sugestao;
    this.var_detalhes = this.ListaSugestao[indice].sugestao_detalhes;
    this.var_contorno = this.ListaSugestao[indice].contorno;

    this.ngProgress.start();
    this.servico.getRating(this.var_seqsugestaoerro).subscribe(rating => {
      this.Rating = rating;
      this.ngProgress.done();
    });

    this.TxtBtnVerde = TxtBtnVerde2;
    this.DesativarBtnVerde = false;
    this.DesativarBtnAmarelo = false;
    this.DesativarBtnVermelho = false;
  }

  onLimpaSugestao(){
    this.var_seqsugestaoerro = -1;
    this.var_seqsugestao = -1;
    this.var_sugestao = '';
    this.var_detalhes = '';
    this.var_contorno = 0;
    this.Rating = [];
    this.TxtBtnVerde = TxtBtnVerde1;
    this.DesativarBtnVerde = true;
    this.DesativarBtnAmarelo = true;
    this.DesativarBtnVermelho = true;
    this.ControleCicloVida = false;
    this.seqSugestaoAux = 0;
  }

  onBuscaIndice2(objeto: any[], valor: any): number{
    for (var i = 0; i < objeto.length; i++){
      if (objeto[i].seq_sugestao_erro == valor){
        return i;
      }
    }
    return -1;
  }

  onMostrarDlg(tipo: number){
    if(tipo == 0){
      this.var_auxdescricao = this.var_detalhes;
      this.MostrarDescricao = true;
    }else{
      this.ngProgress.start();
      this.servico.getSugestaoGlobal().subscribe(sugestao => {
        if(sugestao == null){
          this.ListaSugestaoGlobal = [];
        }else{
          this.ListaSugestaoGlobal = sugestao;
        }
        this.ngProgress.done();
      });   
      this.MostrarDescricao = false;
    }
    this.MostrarDlg = "block";
  }

  onSalvaDlg(tipo: number){  
    if(tipo == 0){
      this.var_auxdescricao = null;
      this.MostrarDlg = "none";
    }else{
      this.ngProgress.start();
      let dados2 = JSON.stringify({ contorno: this.var_contorno,
                                    seqErro: this.SeqIncidente,
                                    seqSugestao: this.seqSugestaoAux});
      this.servico.postSugestaoIncidente(dados2)
      .subscribe(() => {
        this.ControleCicloVida = true;
        this.ngProgress.done();
      });
      this.MostrarDlg = "none";
    }
  }

  onFechaDlg(){
    this.var_detalhes = this.var_auxdescricao;
    this.MostrarDlg = "none";
  }

  onHabilitaBtn2(){
    if(this.var_seqsugestaoerro == -1){
      if(this.var_sugestao != '' || this.var_detalhes != '' || this.var_contorno != 0){
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

  onAtualizarSugestao(){
    let dados = JSON.stringify({descricao: this.var_sugestao,
                                detalhes: this.var_detalhes,
                                seqSugestao: this.var_seqsugestao});
    
    this.ngProgress.start();
    this.servico.putSugestao(this.var_seqsugestao, dados)
                .subscribe(() => { 
                  this.ControleCicloVida = true;
                  this.ngProgress.done(); 
                });
              
    let dados2 = JSON.stringify({ contorno: this.var_contorno,
                                  seqErro: this.SeqIncidente,
                                  seqSugestao: this.var_seqsugestao });

    this.ngProgress.start();
    this.servico.putSugestaoIncidente(this.var_seqsugestaoerro, dados2)
                .subscribe(() => { 
                  this.ControleCicloVida = true;
                  this.ngProgress.done(); 
                });
  }

  onSalvarSugestao(){
    let seq: Number;

    if(this.onValidaCampos()){
      // Se true então se trata de um insert, sernão de um update.
      if(this.var_seqsugestaoerro == -1){
        let dados = JSON.stringify({descricao: this.var_sugestao,
                                    detalhes: this.var_detalhes});

        this.ngProgress.start();
        this.servico.postSugestao(dados)
                    .subscribe(
                      (sugestao) => { 
                        let dados2 = JSON.stringify({ contorno: this.var_contorno,
                                                      seqErro: this.SeqIncidente,
                                                      seqSugestao: sugestao.seqSugestao});
                        this.servico.postSugestaoIncidente(dados2)
                                    .subscribe(() => {});
                        this.ControleCicloVida = true;
                        this.ngProgress.done(); },
                      (err) => { 
                        console.log(err);
                        this.ngProgress.done();
                      });
      }else{
        this.onAtualizarSugestao();
      }  
    }else{
      alert("Todo os campos são obrigatórios");
    } 
  }

  onExcluirSugestao(){
    this.ngProgress.start();
    this.servico.deleteSugestao(this.var_seqsugestao)
                .subscribe(() => { 
                  this.ControleCicloVida = true;
                  this.ngProgress.done(); 
                });
  }

  onValidaCampos(): boolean{
    let controle: boolean = true;

    if(this.var_sugestao == ''){
      controle = false;  
    }
    if(this.var_detalhes == ''){
      controle = false;
    }
    if(this.var_contorno == null){
      controle = false;
    }
    return controle;
  }

  onEscolheSugestaoGlobal(evento){
    this.seqSugestaoAux = evento;
  }

}
