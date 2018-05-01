import { Log } from './../../classes/helpers/log';
import { MessageBll } from './../../classes/business/message-bll';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

import { ChatService } from './../chat.service';
import { Component, Input, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Data } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';


@Component({
  selector: 'chat',
  templateUrl: './chat-index.component.html',
  styleUrls: ['./chat-index.component.css'],
  providers: [ChatService]
})

export class ChatIndexComponent implements OnInit, OnChanges {

  chatbot_EnableButtons = false;
  selectedApplication: number;
  messageToAdd: any = { text: 'Olá eu sou o Nickolas!', isNickolas: true, time: Date.now()};
  incidentToSend: string;
  ptf: any;
  Data: any = {
    seq_ptf: '',
    Modulo: '',
    Aplicacao: ''
  };

  index = 0;

  // name of component
  component = 'chatindex';

  constructor(private route: ActivatedRoute) {

  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
    this.Data.seq_ptf = this.route.snapshot.paramMap.get('PTF');
    this.Data.Modulo = this.route.snapshot.paramMap.get('mod');
    this.Data.Aplicacao = this.route.snapshot.paramMap.get('app');

    this.selectedApplication = this.Data.Aplicacao;

    this.ptf = this.Data;

  }
  // get suggestions from detail component
  detail_onLoadSuggestions(e): void {

    // send suggestions loaded to chatbot;
    if (e != null) {
      this.addMessage(e[0].sugestao, true);
    }

  }

  // get incidents from detail component
  detail_onLoadIncidents(e): void {

    // send incidents loaded to chatbot;
    if (e === 404) { // not found
      this.addMessage(MessageBll.FormatWelcomeMessage(null), true);

    } else {
      this.addMessage(MessageBll.FormatWelcomeMessage(e), true);
    }
    this.chatbot_EnableButtons = false;
  }

  // get simple string message from detail
  detail_onSendSimpleMessage(e): void {

    // send incidents loaded to chatbot;
    this.addMessage(MessageBll.SimpleIncidentChoose(e), true);
    this.chatbot_EnableButtons = true;
  }

  detail_onSendIncidentId(e): void {

    // send incidents loaded to chatbot;
    this.incidentToSend = e;
    this.chatbot_EnableButtons = true;

  }

  // get chatbot buttons event
  chatbot_onAnswer(e): void {
    Log.PutLog(this.component, e);
  }

  // #### PRIVATE UTIL METHODS ####

  // method to add an message
  private async addMessage(_msg: string, _isNickolas: boolean) {
    this.messageToAdd = { text: _msg, isNickolas: _isNickolas, time: Date.now()  };
  }
}
