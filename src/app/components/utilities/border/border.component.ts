import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.scss']
})
export class BorderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element:any): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

}
