import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataTable2, SimpleDataTable } from 'src/app/shared/data/tables/data-table';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit, AfterViewInit {

  public simpleData = SimpleDataTable;
  public tableData = DataTable2;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {}
}
