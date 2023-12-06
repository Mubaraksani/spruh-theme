import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexComponent } from './apex/apex.component';
import { ChartlistComponent } from './chartlist/chartlist.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { EchartComponent } from './echart/echart.component';
import { ChartsRoutingModule } from './charts-routing.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ApexComponent, ChartlistComponent, ChartjsComponent, EchartComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgApexchartsModule,
    NgChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ChartistModule,
    FormsModule,
    SharedModule
  ]
})
export class ChartModule { }
