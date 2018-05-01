import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  aplicacao: number;
  incidente: number;

  constructor() { }

  ngOnInit() { }

  onDisparaIncidente(evento){
    this.aplicacao = evento.seqaplicacao;
  }

  onDisparaSugestao(evento){
    this.incidente = evento.seqerro;
  }

}
