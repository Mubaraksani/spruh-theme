import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padding',
  templateUrl: './padding.component.html',
  styleUrls: ['./padding.component.scss']
})
export class PaddingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(element:any): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

}
