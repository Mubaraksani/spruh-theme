import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { Menu, NavService } from '../../services/nav.service';
import { checkHoriMenu, parentNavActive, switcherArrowFn } from './sidemenu';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  public menuItems!: Menu[];
  public url: any;
  public windowSubscribe$!: any;
  constructor(
    private router: Router,
    private navServices: NavService,
    public elRef: ElementRef,
    private breakpointObserver: BreakpointObserver,
    private modalService : NgbModal
  ) {
    this.checkNavActiveOnLoad();
  }
  // To set Active on Load
  checkNavActiveOnLoad() {
    this.navServices.items.subscribe((menuItems: any) => {
      // if (this.authService.currentUserValue) {
      //   if (this.authService.currentUserValue.user_type == Role.subAdmin){
      //     console.log(this.authService.currentUserValue.privileges)
      //     let privileges = this.authService.currentUserValue.privileges?.map((x:any)=> x.privilege_id)
      //     this.menuItems = menuItems.filter(
      //       x => privileges?.includes(x.id)
      //     )
      //   } else {
      //     this.menuItems = menuItems;
      //   }
      // }
      this.menuItems = menuItems;

      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationStart) {
          let path = location.pathname.split('/');
          let eventUrl = event.url.split('/');
          if (path[path.length - 2] !== eventUrl[eventUrl.length - 2]) {
            this.closeNavActive();
            let sidelink = document.querySelectorAll('.nav-link.active');
            let sidemenuUl = document.querySelector('.nav-item.active');
            let sidemenuul = document.querySelectorAll('.nav-sub-link.sub-with-sub');
            let subSidemenuUl = document.querySelector('.nav-item.active');
            let subSidemenu = document.querySelectorAll('.nav-sub-link.sub-with-sub');
            sidemenuUl?.classList.remove('active');
            subSidemenuUl?.classList.remove('active');
            sidelink.forEach((e) => e.classList.remove('active'));
            sidemenuul.forEach((e) => e.classList.remove('active'));
            subSidemenu.forEach((e) => e.classList.remove('active'));
          }
        }
        if (event instanceof NavigationEnd) {
          menuItems.filter((items: any) => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }
            items.children.filter((subItems: any) => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter((subSubItems: any) => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
                if (!subSubItems.children) {
                  return false;
                }
                subSubItems?.children.filter((subSubItems1: any) => {
                  if (subSubItems1.path === event.url) {
                    this.setNavActive(subSubItems1);
                  }
                  if (!subSubItems1.children) {
                    return false;
                  }
                  return;
                });
                return;
              });
              return;
            });
            return;
          });
          setTimeout(() => {
            if (
              document.querySelector('body')?.classList.contains('horizontalmenu-hover') && window.innerWidth > 992
            ) {
              this.closeNavActive();
              setTimeout(() => {
                parentNavActive();
              }, 0);
            } else {
              parentNavActive();
            }
          }, 200);
        }
      });
    });
  }

  checkCurrentActive() {
    this.navServices.items.subscribe((menuItems: any) => {
      this.menuItems = menuItems;
      let currentUrl = this.router.url;
      menuItems.filter((items: any) => {
        if (items.path === currentUrl) {
          this.setNavActive(items);
        }
        if (!items.children) {
          return false;
        }
        items.children.filter((subItems: any) => {
          if (subItems.path === currentUrl) {
            this.setNavActive(subItems);
          }
          if (!subItems.children) {
            return false;
          }
          subItems.children.filter((subSubItems: any) => {
            if (subSubItems.path === currentUrl) {
              this.setNavActive(subSubItems);
            }
          });
          return;
        });
        return;
      });
    });
  }
  //Active Nav State
  setNavActive(item: any) {
    this.menuItems.filter((menuItem) => {
      if (menuItem !== item) {
        menuItem.active = false;
        this.navServices.collapseSidebar = false;
      }
      if (menuItem == item) {
        menuItem.active = true;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
          if (submenuItems.children) {
            submenuItems.children.forEach((subsubmenuItems) => {
              if (
                subsubmenuItems.children &&
                subsubmenuItems.children.includes(item)
              ) {
                menuItem.active = true;
                submenuItems.active = true;
                subsubmenuItems.active = true;
              }
            });
          }
        });
      }
    });
  }

  // Toggle menu
  toggleNavActive(item: any) {
    if (!item.active) {
      this.menuItems.forEach((a: any) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: any) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
          if (!b.children) {
            return false;
          }
          b.children.forEach((c: any) => {
            if (b.children.includes(item)) {
              c.active = false;
            }
            if (!c.children) {
              return false;
            }
            return;
          });
          return;
        });
        return;
      });
    }
    item.active = !item.active;
  }

  // Close Nav menu
  closeNavActive() {
    this.menuItems.forEach((a: any) => {
      if (this.menuItems) {
        a.active = false;
      }
      if (!a.children) {
        return false;
      }
      a.children.forEach((b: any) => {
        if (a.children) {
          b.active = false;
        }
      });
      return;
    });
  }

  ngOnInit(): void {
    switcherArrowFn();

    fromEvent(window, 'resize').subscribe(() => {
      if (window.innerWidth >= 992) {
        document.querySelector('body.horizontalmenu')?.classList.remove('main-sidebar-show');
      }
      if (document.querySelector('body')?.classList.contains('horizontalmenu-hover') && window.innerWidth > 992) {
        let li = document.querySelectorAll('.menu-nav li');
        li.forEach((e, i) => {
          e.classList.remove('is-expanded');
        });
        let ul = document.querySelectorAll('.menu-nav ul');
        li.forEach((e, i) => {
          e.classList.remove('open');
        });
      }
    });

    // detect screen size changes
    this.breakpointObserver.observe(['(max-width: 991px)']).subscribe((result: BreakpointState) => {
      if (result.matches) {
        // small screen
        this.checkCurrentActive();
      } else {
        // large screen
        document.querySelector('body.horizontalmenu')?.classList.remove('main-sidebar-show');
        if (document.querySelector('.horizontalmenu:not(.horizontalmenu-hover)')) {
          this.closeNavActive();
          setTimeout(() => {
            parentNavActive();
          }, 100);
        }
      }
    });

    let vertical: any = document.querySelectorAll('#myonoffswitch01');
    let horizontal: any = document.querySelectorAll('#myonoffswitch02');
    let horizontalHover: any = document.querySelectorAll('#myonoffswitch03');
    fromEvent(vertical, 'click').subscribe(() => {
      this.checkCurrentActive();
    });
    fromEvent(horizontal, 'click').subscribe(() => {
      this.closeNavActive();
    });
    fromEvent(horizontalHover, 'click').subscribe(() => {
      this.closeNavActive();
    });

    const WindowResize = fromEvent(window, 'resize');
    // subscribing the Observable
    this.windowSubscribe$ = WindowResize.subscribe(() => {
      checkHoriMenu();
    });

    let maincontent: any = document.querySelectorAll('.main-content');
    fromEvent(maincontent, 'click').subscribe(() => {
      if (document.querySelector('body')?.classList.contains('horizontalmenu')) {
        this.closeNavActive();

        setTimeout(() => { parentNavActive() }, 100)
      }
    });
  }

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 64;
  }

  ngOnDestroy() {
    // unsubscribing the Observable
    this.windowSubscribe$.unsubscribe();
  }
  /**Modal pop up  */
  openScrollableContent(scrolling: any) {
    this.modalService.open(scrolling, { scrollable: true , size:'lg'});
  }
}
