import { Component, OnInit, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, AfterViewInit {
  active = 1;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    const contactList1:any = document.querySelector('#mainContactList');
    contactList1.addEventListener('scroll',()=>{}, {passive:false})
    contactList1.addEventListener('wheel',()=>{}, {passive:false})
   
    let ps1 = new PerfectScrollbar(contactList1, {
      useBothWheelAxes:true,
      suppressScrollX:true,
    });

  }

}
