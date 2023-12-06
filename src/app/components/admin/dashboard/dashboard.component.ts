import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/dashboard';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {  }
  //line Chart
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartData = chartData.lineChartData;

  //Bar chart
  public barChartOptions = chartData.barChartOptions;
  public barChartType = chartData.barChartType;
  public barChartData = chartData.barChartData;


}
