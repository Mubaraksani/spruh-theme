import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ModalsComponent } from './modals/modals.component';
import { TimelineComponent } from './timeline/timeline.component';
import { DraggableCardsComponent } from './draggable-cards/draggable-cards.component';
import { SweetAlertsComponent } from './sweet-alerts/sweet-alerts.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SearchComponent } from './search/search.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdvancedRoutingModule } from './advanced-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { DpDatePickerModule } from 'ng2-date-picker';
import { DragulaModule } from 'ng2-dragula';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TreeviewComponent } from './treeview/treeview.component';
import { NotificationComponent } from './notification/notification.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CardsComponent } from './cards/cards.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxNotifierModule } from 'ngx-notifier';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CarouselComponent, CollapseComponent, ModalsComponent, TimelineComponent, DraggableCardsComponent, SweetAlertsComponent, RatingsComponent, SearchComponent, UserlistComponent, TreeviewComponent, NotificationComponent, CalendarComponent, ChatComponent, ContactsComponent, CardsComponent ],
  imports: [
    CommonModule,
    AdvancedRoutingModule,
    NgbModule,
    NgSelectModule,
    SharedModule,
    DpDatePickerModule,
    DragulaModule.forRoot(),
    SweetAlert2Module,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgxNotifierModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,MatSnackBarModule,
    MatTreeModule, MatIconModule, MatProgressBarModule,
  ]
})
export class AdvancedUiModule { }
