import { Component, HostListener, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { SwitcherService } from '../../services/switcher.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit {
  constructor(
    public navServices: NavService,
    public switcherService: SwitcherService
  ) {}

  ngOnInit(): void {}

  clickonBody() {
    if (this.navServices.collapseSidebar == true) {
      document.querySelector('.main-body')?.classList.remove('main-sidebar-hide');
      document.querySelector('.main-body')?.classList.remove('main-sidebar-show');
      this.navServices.collapseSidebar = false;
    }
    this.switcherService.emitSwitcherChange(false);
  }

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 64;
  }

}
