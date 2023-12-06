import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsRoutingModule } from './apps-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from './widgets/widgets.module';
import { MapsModule } from './maps/maps.module';
import { IconsModule } from './icons/icons.module';
import { TablesModule } from './tables/tables.module';
import { MailModule } from './mail/mail.module';
import { BlogModule } from './blog/blog.module';
import { FileManagerModule } from './file-manager/file-manager.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppsRoutingModule,
    WidgetsModule,
    MapsModule,
    IconsModule,
    TablesModule,
    MailModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BlogModule,
    FileManagerModule
  ]
})
export class AppsModule { }
