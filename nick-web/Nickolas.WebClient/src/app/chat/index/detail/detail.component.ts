import { FilterPipe } from './../../../pipes/filter.pipe';
import { Component, Input, OnInit, OnChanges, EventEmitter, Output, ViewChild, Renderer2 } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

import { ChatService } from '../../chat.service';
import { debounce } from 'rxjs/operators/debounce';

declare var $: any;

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnChanges {

  IncidentsArray: any[] = null;
  canHideDescription = false;
  // name of component
  component = 'detail';
  constructor(
    private chatService: ChatService,
    private renderer: Renderer2,
    public ngProgress: NgProgress
  ) { }


  @Input() selectedApplicationId: number;
  //
  @Output() onLoadIncidents: EventEmitter<any> = new EventEmitter();
  @Output() onSendSimpleMessage: EventEmitter<string> = new EventEmitter();
  @Output() onSendIncidentId: EventEmitter<string> = new EventEmitter();
  @Output() onLoadSuggestions: EventEmitter<any> = new EventEmitter();

  @ViewChild('incidentList') incidentList;


  // load incidents from service
  loadIncidents(): void {
    this.ngProgress.start();
    this.chatService.getIncidentsByApplication(this.selectedApplicationId).subscribe(incidents => {
      this.IncidentsArray = incidents;

      // send data to another components
      this.sendIncidentsLoaded();

      this.ngProgress.done();
    }, (err) => {
      this.sendNotFound();
      this.ngProgress.done();
    }
    );
  }

  sendNotFound() {
    this.onLoadIncidents.emit(404);
  }

  sendIncidentsLoaded() {
    if (this.IncidentsArray != null) {
      this.onLoadIncidents.emit(this.IncidentsArray); // Commented to not send incident description
    }
  }

  selectIncident(e, selectedIncident) {
    let activeItem = this.incidentList.nativeElement.querySelector('.active');
    if (activeItem != null) {
      this.renderer.removeClass(activeItem, 'active');
    }

    let elementTarget = null;
    if (e.target.tagName == 'P' || e.target.tagName == 'DIV') {
      elementTarget = e.target.parentElement;
    } else if (e.target.tagName == 'H6') {
      elementTarget = e.target.parentElement.parentElement;
    } else {
      elementTarget = e.target;
    }

    this.renderer.addClass(elementTarget, 'active');

    this.onSendIncidentId.emit(selectedIncident.seq_erro); // Commented to do not send incident description
    this.onSendSimpleMessage.emit(selectedIncident.titulo);   // Commented to do not send incident description
  }

  ngOnChanges() {
    this.loadIncidents();
  }

  hiddenDescription() {
    this.canHideDescription = !this.canHideDescription;
  }
}
