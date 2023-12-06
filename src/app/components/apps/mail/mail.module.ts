import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailInboxComponent } from './mail-inbox/mail-inbox.component';
import { ViewMailComponent } from './view-mail/view-mail.component';
import { MailRoutingModule } from './mail-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MailInboxComponent, ViewMailComponent, MailComposeComponent],
  imports: [
    CommonModule,
    MailRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class MailModule { }
