import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileManagerListComponent } from './file-manager-list/file-manager-list.component';
import { FileDetailsComponent } from './file-details/file-details.component';
import { FileAttachmentsComponent } from './file-attachments/file-attachments.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FileManagerComponent,
    FileManagerListComponent,
    FileDetailsComponent,
    FileAttachmentsComponent
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class FileManagerModule { }
