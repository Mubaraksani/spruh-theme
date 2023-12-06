import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DraggableCardsComponent } from './draggable-cards/draggable-cards.component';
import { ModalsComponent } from './modals/modals.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SearchComponent } from './search/search.component';
import { SweetAlertsComponent } from './sweet-alerts/sweet-alerts.component';
import { TimelineComponent } from './timeline/timeline.component';
import { UserlistComponent } from './userlist/userlist.component';
import { NotificationComponent } from './notification/notification.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { CardsComponent } from './cards/cards.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'carousel',
        component: CarouselComponent
      },
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'chat',
        component: ChatComponent
      },
      {
        path: 'collapse',
        component: CollapseComponent
      },
      {
        path: 'draggable-cards',
        component: DraggableCardsComponent
      },
      {
        path: 'modals',
        component: ModalsComponent
      },
      {
        path: 'ratings',
        component: RatingsComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'sweet-alerts',
        component: SweetAlertsComponent
      },
      {
        path: 'timeline',
        component: TimelineComponent
      },
      {
        path: 'userlist',
        component: UserlistComponent
      },
      {
        path: 'notification',
        component: NotificationComponent
      },
      {
        path: 'treeview',
        component: TreeviewComponent
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  AdvancedRoutingModule { }