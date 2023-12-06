import { Component, OnInit, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit , AfterViewInit{

  constructor() { }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(){
    const mainChatList = document.querySelector('.main-chat-list')
    const ChatBody = document.querySelector('#ChatBody')
    
    mainChatList?.addEventListener('scroll',()=>{}, {passive:false})
    mainChatList?.addEventListener('wheel',()=>{}, {passive:false})
    ChatBody?.addEventListener('scroll', ()=>{}, {passive:false})
    ChatBody?.addEventListener('wheel', ()=>{}, {passive:false})

    let ps = new PerfectScrollbar('.main-chat-list', {
      suppressScrollX: true
    });
    
    let ps1 = new PerfectScrollbar('#ChatBody', {
      suppressScrollX: true
    });
    
  }
}
