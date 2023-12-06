import { Component, HostListener, OnInit, } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public isMenuCollapsed = true;
  constructor() {  
    document.body.classList.add('landing-page', 'sidebar-mini', 'horizontalmenu', 'app', 'ltr');
    document.body.classList.remove('leftmenu', 'horizontal', 'rtl');
  }
  
  ngOnInit(): void {}
  

    // ngx owl carousel
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: false,
      autoplay: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      margin: 50,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 4,
        },
        740: {
          items: 6,
        },
        940: {
          items: 8,
        },
      },
      nav: false,
    };
    customOptions1: OwlOptions = {
      loop: true,
      mouseDrag: true,
      autoplay: true,
      margin: 50,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1600: {
          items: 1,
        },
      },
      nav: false,
    };
  
    scroll(el: HTMLElement) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  
    scrolled: boolean = false;
  
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.scrolled = window.scrollY > 10;
  
      const sections = document.querySelectorAll('.side-menu__item');
      const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
  
      sections.forEach((ele, i) => {
        const currLink = sections[i];
        const val: any = currLink.getAttribute('value');
        const refElement: any = document.querySelector('#' + val);
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          currLink.classList.add('active');
        } else {
          currLink.classList.remove('active');
        }
      });
    }

  ngOnDestroy(){
    document.body.classList.remove('landing-page', 'sidebar-mini', 'horizontalmenu', 'app', 'ltr');
    document.body.classList.add('leftmenu', 'rtl');
    location.reload();
  }
  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth >= 992) {
      document.querySelector('body')?.classList.remove('sidenav-toggled');
    }
  }
}
