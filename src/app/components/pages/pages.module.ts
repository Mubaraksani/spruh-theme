import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SuccessmessageComponent } from './successmessage/successmessage.component';
import { DangermessageComponent } from './dangermessage/dangermessage.component';
import { WarningmessageComponent } from './warningmessage/warningmessage.component';
import { EmptypageComponent } from './emptypage/emptypage.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';
import 'mousetrap'
import { PageMsgRoutingModule } from './page-msg-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GalleryModule, ModalGalleryService } from '@ks89/angular-modal-gallery';



@NgModule({
  declarations: [ProfileComponent, InvoiceComponent, PricingComponent, GalleryComponent, FaqsComponent, SuccessmessageComponent, DangermessageComponent, WarningmessageComponent, EmptypageComponent, SettingsComponent, AboutusComponent, NotificationsListComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PageMsgRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    GalleryModule,
  ],
  providers:[
    ModalGalleryService
  ]
})
export class PagesModule { }
