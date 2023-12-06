import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-width',
  templateUrl: './width.component.html',
  styleUrls: ['./width.component.scss']
})
export class WidthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(element:any): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

}
