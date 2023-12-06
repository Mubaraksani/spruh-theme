import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { DataComponent } from './data/data.component';
import { TablesRoutingModule } from './tables-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [BasicComponent, DataComponent],
  imports: [
    CommonModule,
    TablesRoutingModule,
    NgxDatatableModule,
    SharedModule
  ]
})
export class TablesModule { }
