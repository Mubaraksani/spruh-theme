import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [WidgetsComponent],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class WidgetsModule { }
