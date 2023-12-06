import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    UsersListComponent,
    AddUsersComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    NgSelectModule,
    NgbPaginationModule,
    TranslateModule,
    HttpClientModule,
    NgbModule,
    NgxDropzoneModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule

  ]
})
export class ManageUsersModule { }
