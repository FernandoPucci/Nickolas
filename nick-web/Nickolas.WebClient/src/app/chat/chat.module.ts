import { FilterPipe } from './../pipes/filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgProgressModule } from 'ngx-progressbar';

import { ChatIndexComponent } from './index/chat-index.component';
import { ChatbotComponent } from './index/chatbot/chatbot.component';
import { DetailComponent } from './index/detail/detail.component';
import { StartComponent } from './start/start.component';

import { StarRatingModule } from 'angular-star-rating';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgProgressModule,
    StarRatingModule.forRoot()

  ],
  declarations: [ChatIndexComponent, ChatbotComponent, DetailComponent, StartComponent, FilterPipe]
})
export class ChatModule { }
