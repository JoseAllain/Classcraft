import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatMessageComponent} from "./chat-message/chat-message.component";

const routes: Routes = [
  { path: 'mensajeria', component: ChatMessageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensajeriaRoutingModule { }
