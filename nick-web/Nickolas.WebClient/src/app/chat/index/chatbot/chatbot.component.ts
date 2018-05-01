import { Log } from './../../../classes/helpers/log';
import { Message } from './../../../classes/model/message';
import { NgProgress } from 'ngx-progressbar';
import { Component, ViewChild, EventEmitter, Input, Output, OnChanges, AfterViewChecked } from '@angular/core';
import { SimpleChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { ChatService } from '../../chat.service';

declare var $: any;

@Component({
  selector: 'chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  providers: [ChatService]

})
export class ChatbotComponent implements OnChanges, DoCheck, AfterViewChecked {

  constructor(private chatService: ChatService, public ngProgress: NgProgress) {
    this.enableChabotButtons(false);
  }

  messages: any[] = [];
  btnYesText = 'SIM';
  btnNoText = 'NÃO';
  btnRestart = ''; // 'Começar de Novo';
  //
  msgOk = 'Questão Resolvida!';
  msgNOk = 'Ainda não resolvi';
  //
  SuggestionsArray: any[] = null;
  //
  enableBtnYes = false;
  enableBtnNo = false;
  enableBtnRestart = false;
  //
  messageYes = '';
  messageNo = '';
  totalYes = 0;
  totalNo = 0;
  isWorkflowSucess = 'N'; // indicates if workflow solved the user incident
  //
  msgRating = '';
  showRating = false;
  showRateOpt = 0;
  //
  // name of component
  component = 'chatbot';
  index = 0;
  ctrl = false; // status control
  dateNow = Date.now();

  @Output() onAnswer: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('objChat') objChat;

  @Input() enableButtons: boolean;
  @Input() message: any;
  @Input() messageArray: any;
  @Input() incident: any;
  @Input() ptfData: any;
  // message {text: 'message to add', isNickolas: true}

  onInit(): void {

  }

  onHoverRatingChange(e): void {

    if (e) {
      switch (e.hoverRating) {
        case 1:
          this.msgRating = 'Que pena, dessa vez fui muito mal. :(';
          break;
        case 2:
          this.msgRating = 'Preciso Melhorar. :\\';
          break;
        case 3:
          this.msgRating = 'Ok, mas posso fazer melhor! :|';
          break;
        case 4:
          this.msgRating = 'Legal! Obrigado! :)';
          break;
        case 5:
          this.msgRating = 'Obrigado!!!  :D :D :D';
          break;
      }

    }
  }

  ngAfterViewChecked(): void {
    this.updateScroll();
  }

  ngDoCheck(): void {
    this.updateScroll();
  }

  ngOnChanges(changes: SimpleChanges) {


    if (changes['incident'] && changes['incident'].previousValue != changes['incident'].currentValue) {

      this.loadSuggestions(this.incident);
      this.enableChabotButtons(true);

      this.ctrl = true;

      if (this.SuggestionsArray == null || this.SuggestionsArray.length == 0) {

      } else {
        if (this.index != 0) {
          this.pushMessage({ text: 'NÃO', isNickolas: false, time: Date.now() });
        }
        this.pushMessage({ text: 'Ooops... vi que você mudou de escolha. Tudo bem.', isNickolas: true, time: Date.now() });
      }

    }

    if (changes['message'] && changes['message'].previousValue != changes['message'].currentValue) {
      this.pushMessage(this.message);

      if (!this.ctrl) {
        this.enableChabotButtons((this.SuggestionsArray != null && this.SuggestionsArray.length != 0));
      }

    }

    if (changes['messageArray'] && changes['messageArray'].previousValue != changes['messageArray'].currentValue) {
      this.messageArray.forEach(element => {
        this.pushMessage(element);
      });

    }
  }

  refresh(): void {
    window.location.reload();
  }

  btnAnswer_Click(answer) {
    this.onAnswer.emit(answer);
    // 
    switch (answer) {
      case 1: // yes
        this.addUserResponseToScreen(answer);
        this.onYesAnswer();
        break;

      case 2: // no
        if (this.SuggestionsArray != null && this.SuggestionsArray.length > 0 && (this.SuggestionsArray.length == this.index)) {
          this.index = -1;
        }
        this.addUserResponseToScreen(answer);
        this.onNoAnswer();
        break;

      case 3:
        this.onAnswer.emit(answer);
        break;
      default:
        break;
    }
  }



  onYesAnswer(end = false) {
    if (this.messageYes) {
      this.pushMessage({ text: this.messageYes, isNickolas: false, time: Date.now() });
    }

    end = !end ? this.index >= 1 : end;

    this.totalYes++;

    let yesMsg = '';
    switch (this.index) {

      case 1:
        yesMsg = 'Legal! Então tente isto:  ';
        break;
      case 2:
        yesMsg = 'Hum, ok. Vamos ver.  ';
        break;
      case 3:
        yesMsg = 'Certo! Ainda tenho mais ideias. ';
        break;
      default:
        yesMsg = 'Entendi! ';
        break;
    }


    if (end) {

      this.pushMessage({ text: 'Que bom! Fico contente! Agora por favor, avalie nosso atendimento.', isNickolas: true, time: Date.now() });
      this.showRating = true;
      this.enableChabotButtons(false);
      this.isWorkflowSucess = 'S';

    } else if (this.SuggestionsArray && this.SuggestionsArray.length > 0) {
      if (this.SuggestionsArray[this.index] != null && this.SuggestionsArray[this.index].sugestao != null) {
        this.pushMessage({ text: yesMsg + this.SuggestionsArray[this.index].sugestao, isNickolas: true, time: Date.now() });
        this.pushMessage({ text: this.SuggestionsArray[this.index].sugestao_detalhes, isNickolas: true, time: Date.now() });
      }
      this.index++; // ready next message
      this.btnYesText = this.msgOk;
      this.btnNoText = this.msgNOk;
      //
      this.messageYes = this.btnYesText;
      this.messageNo = this.btnNoText;
      //      
      this.enableChabotButtons(true);

    }

  }

  onNoAnswer() {

    if (this.messageNo) {
      this.pushMessage({ text: this.messageNo, isNickolas: false, time: Date.now() });
    }

    this.totalNo++;

    let noMsg = '';

    switch (this.index) {
      case -1:
        noMsg = 'Infelizmente ainda não consegui resolver seu problema e não tenho mais ideias. ' +
          'Mas tudo bem. Vou anotar seu chamado para um atendente. Na próxima estarei mais esperto';
        this.showRating = true;
        this.enableChabotButtons(false);
        this.isWorkflowSucess = 'N';
        this.ctrl = false;
        break;
      case 0:
        this.index = 0;
        this.pushMessage({ text: 'Sem Problemas! Escolha outra opção.', isNickolas: true, time: Date.now() });
        return;
      case 1:
        noMsg = 'Sem problemas! Tente este:';
        break;
      case 2:
        noMsg = 'Hum Ok! Experimente isto.';
        break;
      case 3:
        noMsg = 'Certo! Outra ideia.';
        break;
      default:
        noMsg = 'Mais uma tentativa.';
        break;
    }

    this.pushMessage({ text: noMsg, isNickolas: true, time: Date.now() });


    if (this.SuggestionsArray && this.SuggestionsArray.length > 0) {
      if (this.SuggestionsArray[this.index] != null && this.SuggestionsArray[this.index].sugestao != null) {
        this.pushMessage({ text: this.SuggestionsArray[this.index].sugestao, isNickolas: true, time: Date.now() });
        this.pushMessage({ text: this.SuggestionsArray[this.index].sugestao_detalhes, isNickolas: true, time: Date.now() });
      }
      this.index++; // ready next message

      this.btnYesText = this.msgOk;
      this.btnNoText = this.msgNOk;
      //
      this.messageYes = this.btnYesText;
      this.messageNo = this.btnNoText;
      //
      if (this.ctrl) {
        this.enableChabotButtons(true);
      }


    }
  }

  enableChabotButtons(enable: boolean) {
    this.enableBtnNo = enable;
    this.enableBtnYes = enable;
    this.enableBtnRestart = enable;
  }

  // scroll to bottom of chat
  updateScroll(): void {
    let elem = document.getElementById('chatDiv');
    elem.scrollTop = elem.scrollHeight;
  }

  onRate(e): void {

    this.showRateOpt = 1;
    this.msgRating = ''; // clear message
    //    
    if (this.index <= 0) {
      this.index = this.SuggestionsArray.length - 1;
    } else {
      this.index--;
    }

    let ratingObj = {
      solucionado: this.isWorkflowSucess,
      rating: e.rating,
      seqPtf: this.ptfData.seq_ptf,
      seqModulo: this.ptfData.Modulo,
      seqAplicacao: this.SuggestionsArray[0].seq_aplicacao,
      seqSugestaoErro: this.SuggestionsArray[this.index].seq_sugestao_erro,
      stacktrace: this.getChatStackTrace(),
      totalSim: this.totalYes,
      totalNao: this.totalNo
    };

    let resp = this.saveRatingObj(ratingObj);

  }

  // #### PRIVATE UTIL METHODS ####
  private pushMessage(_msg: any) {
    // Log.PutLog(this.component, 'pushMessage:' + JSON.stringify(_msg));
    this.messages.push(_msg);
    //  this.enableChabotButtons(false);
  }

  private addUserResponseToScreen(userResponse) {
    this.messages.push({ text: userResponse === 1 ? 'SIM' : 'NÃO', isNickolas: false, time: Date.now() });
    this.enableChabotButtons(false);
  }

  private loadSuggestions(incidentId): void {
    this.ngProgress.start();

    this.chatService.getSuggestionsByIncident(incidentId).subscribe(suggestions => {
      this.SuggestionsArray = suggestions;
      this.ngProgress.done();

    }, (err) => {
      console.log(err);
      this.ngProgress.done();
    }
    );
  }

  private getChatStackTrace(): string {

    let stack = '';

    if (this.messages && this.messages.length > 0) {

      for (let i = 0; i <= this.messages.length; i++) {
        if (this.messages[i]) {
          stack = stack + ' \\n ' + (this.messages[i].isNickolas ? '>>[Nick]:' : '  **[User]:')
            + this.messages[i].text.replace('\'', ' ').replace('"', ' ');
        }
      }

    }
    return stack;
  }

  private saveRatingObj(ratingObj) {
    let resp = '';
    this.ngProgress.start();

    this.chatService.createPostRating(ratingObj).subscribe(data => {
      resp = data;
      this.ngProgress.done();

    }, (err) => {
      console.log(err);
      this.ngProgress.done();
    }
    );
    return resp;
  }

}
