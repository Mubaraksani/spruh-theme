import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-margin',
  templateUrl: './margin.component.html',
  styleUrls: ['./margin.component.scss']
})
export class MarginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(element:any): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

}
