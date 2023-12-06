import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

//Menu Bar
export interface Menu {
  id?: string;
  headTitle?: string;
  title?: string;
  path?: string;
  icon?: string;
  type?: string;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerwidth < 991) {
          this.collapseSidebar = false;
        }
      });
    if (window.innerWidth < 991) {
      this.router.events.subscribe((event) => {
        this.collapseSidebar = false;
      });
    }
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  ngOnDestroy() {
    this.unsubscriber.next(true);
    this.unsubscriber.complete();
  }

  MENUITEMS: Menu[] = [
    //title
    // { headTitle: 'dashboard' },
    {
      id: '1',
      path: '/dashboard',
      title: 'Dashboard',
      type: 'link',
      icon: 'fa fa-home',
      active: false,
    },
    {
      id:'2',
      path: '/users/users-list',
      title: 'Manage Users',
      type: 'link',
      icon: 'ti-user',
      active: false,
    },
    // {
    //   title: 'Crypto Currencies',
    //   icon: 'ti-wallet',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { path: '/crypto/crypto-dashboard', title: 'Dashboard', type: 'link' },
    //     { path: '/crypto/marketcap', title: 'Marketcap', type: 'link' },
    //     {
    //       path: '/crypto/currency-exchange',
    //       title: 'Currency Exchange',
    //       type: 'link',
    //     },
    //     { path: '/crypto/buy-sell', title: 'Buy & Sell', type: 'link' },
    //     { path: '/crypto/wallet', title: 'Wallet', type: 'link' },
    //     { path: '/crypto/transactions', title: 'Transactions', type: 'link' },
    //   ],
    // },
    // {
    //   title: 'E-Commerce',
    //   icon: 'ti-shopping-cart-full',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     {
    //       path: '/ecommerce/ecommerce-dashboard',
    //       title: 'Dashboard',
    //       type: 'link',
    //     },
    //     { path: '/ecommerce/products', title: 'Products', type: 'link' },
    //     {
    //       path: '/ecommerce/products-details',
    //       title: 'Products Details',
    //       type: 'link',
    //     },
    //     { path: '/ecommerce/cart', title: 'Cart', type: 'link' },
    //     { path: '/ecommerce/wishlist', title: 'Wishlist', type: 'link' },
    //     { path: '/ecommerce/checkout', title: 'Checkout', type: 'link' },
    //     { path: '/ecommerce/orders', title: 'Orders', type: 'link' },
    //     { path: '/ecommerce/add-product', title: 'Add product', type: 'link' },
    //     { path: '/ecommerce/account', title: 'Account', type: 'link' },
    //   ],
    // },

    // { headTitle: 'Landing' },
    // {
    //   path: '/landing-page',
    //   title: 'Landingpage',
    //   type: 'link',
    //   icon: 'ti-layout',
    //   active: false,
    // },
    // { headTitle: 'applications' },

    // {
    //   title: 'Apps',
    //   icon: 'ti-write',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     {
    //       path: '/apps/widgets',
    //       title: 'Widgets',
    //       type: 'link',
    //       active: false,
    //     },
    //     {
    //       title: 'Mail',
    //       type: 'sub',
    //       badgeClass: 'bg-warning',
    //       badgeValue: '2',
    //       active: false,
    //       children: [
    //         {
    //           path: '/apps/mail/mail-inbox',
    //           title: 'Mail Inbox',
    //           type: 'link',
    //         },
    //         { path: '/apps/mail/view-mail', title: 'View Mail', type: 'link' },
    //         { path: '/apps/mail/mail-compose', title: 'Mail Compose', type: 'link' },
    //       ],
    //     },
    //     {
    //       title: 'Maps',
    //       type: 'sub',
    //       badgeClass: 'bg-secondary',
    //       badgeValue: '2',
    //       active: false,
    //       children: [
    //         { path: '/apps/maps/leaflet', title: 'Leaflet Maps', type: 'link' },
    //       ],
    //     },
        // {
        //   title: 'Tables',
        //   type: 'sub',
        //   active: false,
        //   icon: 'fa fa-table',
        //   children: [
        //     { path: '/apps/tables/basic', title: 'Basic Tables', type: 'link' },
        //     { path: '/apps/tables/data', title: 'Data Tables', type: 'link' },
        //   ],
        // },
    {
      id: '3',
      path: '/apps/tables/data',
      title: 'Data Tables',
      type: 'link',
      icon: 'fa fa-table',
      active: false,
    },
    //     {
    //       title: 'Blog',
    //       type: 'sub',
    //       active: false,
    //       children: [
    //         { path: '/apps/blog/blog-page', title: 'Blog Page', type: 'link' },
    //         {
    //           path: '/apps/blog/blog-details',
    //           title: 'Blog details',
    //           type: 'link',
    //         },
    //         { path: '/apps/blog/blog-post', title: 'Blog Post', type: 'link' },
    //       ],
    //     },
    //     {
    //       title: 'File manager',
    //       type: 'sub',
    //       active: false,
    //       children: [
    //         {
    //           path: '/apps/file-manager/file-manager',
    //           title: 'File Manager',
    //           type: 'link',
    //         },
    //         {
    //           path: '/apps/file-manager/file-manager-list',
    //           title: 'File Manager List',
    //           type: 'link',
    //         },
    //         {
    //           path: '/apps/file-manager/file-details',
    //           title: 'File Details',
    //           type: 'link',
    //         },
    //         {
    //           path: '/apps/file-manager/file-attachments',
    //           title: 'File Attachments',
    //           type: 'link',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Icons',
    //       icon: 'ti-face-smile',
    //       type: 'sub',
    //       active: false,
    //       children: [
    //         {
    //           path: '/apps/icons/font-awesome',
    //           title: 'Font Awesome',
    //           type: 'link',
    //         },
    //         {
    //           path: '/apps/icons/material-design',
    //           title: 'Material Design Icons',
    //           type: 'link',
    //         },
    //         {
    //           path: '/apps/icons/simple-line',
    //           title: 'Simple Line Icons',
    //           type: 'link',
    //         },
    //         {
    //           path: '/apps/icons/feather',
    //           title: 'Feather Icons',
    //           type: 'link',
    //         },
    //         { path: '/apps/icons/ionic', title: 'Ionic Icons', type: 'link' },
    //         { path: '/apps/icons/flag', title: 'Flag Icons', type: 'link' },
    //         { path: '/apps/icons/pe7', title: 'Pe7 Icons', type: 'link' },
    //         {
    //           path: '/apps/icons/themify',
    //           title: 'Themify Icons',
    //           type: 'link',
    //         },
    //         {
    //           path: '/apps/icons/typicons',
    //           title: 'Typicons Icons',
    //           type: 'link',
    //         },
    //         {
    //           path: '/apps/icons/weather',
    //           title: 'Weather Icons',
    //           type: 'link',
    //         },
    //         {
    //           path: '/apps/icons/material',
    //           title: 'Material SVG',
    //           type: 'link',
    //         },
    //       ],
    //     },
    //   ],
    // },

    // { headTitle: 'components' },
    // {
    //   title: 'Elements',
    //   icon: 'ti-package',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { path: '/elements/accordion', title: 'Accordion', type: 'link' },
    //     { path: '/elements/alerts', title: 'Alerts', type: 'link' },
    //     { path: '/elements/avatar', title: 'Avatars', type: 'link' },
    //     { path: '/elements/breadcrumb', title: 'Breadcrumb', type: 'link' },
    //     { path: '/elements/buttons', title: 'Buttons', type: 'link' },
    //     { path: '/elements/badge', title: 'Badge', type: 'link' },
    //     { path: '/elements/dropdown', title: 'Dropdown', type: 'link' },
    //     { path: '/elements/thumbnails', title: 'Thumbnails', type: 'link' },
    //     { path: '/elements/listgroup', title: 'List Group', type: 'link' },
    //     { path: '/elements/navigation', title: 'Navigation', type: 'link' },
    //     { path: '/elements/pagination', title: 'Pagination', type: 'link' },
    //     { path: '/elements/popover', title: 'Popover', type: 'link' },
    //     { path: '/elements/progress', title: 'Progress', type: 'link' },
    //     { path: '/elements/spinners', title: 'Spinners', type: 'link' },
    //     {
    //       path: '/elements/media-objects',
    //       title: 'Media Object',
    //       type: 'link',
    //     },
    //     { path: '/elements/typhography', title: 'Typhography', type: 'link' },
    //     { path: '/elements/tooltips', title: 'Tooltips', type: 'link' },
    //     { path: '/elements/toast', title: 'Toast', type: 'link' },
    //     { path: '/elements/tags', title: 'Tags', type: 'link' },
    //     { path: '/elements/tabs', title: 'Tabs', type: 'link' },
    //   ],
    // },
    // {
    //   title: 'Advanced UI',
    //   icon: 'ti-briefcase',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { path: '/advanced-ui/carousel', title: 'Carousel', type: 'link' },
    //     { path: '/advanced-ui/collapse', title: 'Collapse', type: 'link' },
    //     { path: '/advanced-ui/chat', title: 'Chat', type: 'link' },
    //     { path: '/advanced-ui/cards', title: 'Cards', type: 'link' },
    //     { path: '/advanced-ui/calendar', title: 'Calendar', type: 'link' },
    //     { path: '/advanced-ui/contacts', title: 'Contacts', type: 'link' },
    //     { path: '/advanced-ui/modals', title: 'Modals', type: 'link' },
    //     { path: '/advanced-ui/timeline', title: 'Timeline', type: 'link' },
    //     {
    //       path: '/advanced-ui/draggable-cards',
    //       title: 'Draggable-Cards',
    //       type: 'link',
    //     },
    //     {
    //       path: '/advanced-ui/sweet-alerts',
    //       title: 'Sweet Alerts',
    //       type: 'link',
    //     },
    //     { path: '/advanced-ui/ratings', title: 'Ratings', type: 'link' },
    //     { path: '/advanced-ui/search', title: 'Search', type: 'link' },
    //     { path: '/advanced-ui/userlist', title: 'Userlist', type: 'link' },
    //     {
    //       path: '/advanced-ui/notification',
    //       title: 'Notification',
    //       type: 'link',
    //     },
    //     { path: '/advanced-ui/treeview', title: 'Treeview', type: 'link' },
    //   ],
    // },

    // { headTitle: 'Other Pages' },
    // {
    //   title: 'Pages',
    //   icon: 'ti-palette',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { path: '/pages/profile', title: 'Profile', type: 'link' },
    //     { path: '/pages/aboutus', title: 'About Us', type: 'link' },
    //     { path: '/pages/settings', title: 'settings', type: 'link' },
    //     { path: '/pages/invoice', title: 'Invoice', type: 'link' },
    //     { path: '/pages/pricing', title: 'Pricing', type: 'link' },
    //     { path: '/pages/gallery', title: 'Gallery', type: 'link' },
    //     { path: '/pages/notification-list', title: 'Notifications list', type: 'link'},
    //     { path: '/pages/faqs', title: 'Faqs', type: 'link' },
    //     {
    //       path: '/alert-pages/success-message',
    //       title: 'Success Message',
    //       type: 'link',
    //     },
    //     {
    //       path: '/alert-pages/danger-message',
    //       title: 'Danger Message',
    //       type: 'link',
    //     },
    //     {
    //       path: '/alert-pages/warning-message',
    //       title: 'Warning Message',
    //       type: 'link',
    //     },
    //     { path: '/pages/empty-page', title: 'Empty Page', type: 'link' },
    //   ],
    // },
    // {
    //   title: 'Utilities',
    //   icon: 'ti-shield',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { path: '/utilities/background', title: 'Background', type: 'link' },
    //     { path: '/utilities/border', title: 'Border', type: 'link' },
    //     { path: '/utilities/display', title: 'Display', type: 'link' },
    //     { path: '/utilities/flex', title: 'Flex', type: 'link' },
    //     { path: '/utilities/height', title: 'Height', type: 'link' },
    //     { path: '/utilities/margin', title: 'Margin', type: 'link' },
    //     { path: '/utilities/padding', title: 'Padding', type: 'link' },
    //     { path: '/utilities/position', title: 'Position', type: 'link' },
    //     { path: '/utilities/width', title: 'Width', type: 'link' },
    //     { path: '/utilities/extras', title: 'Extras', type: 'link' },
    //   ],
    // },
    // {
    //   title: 'Submenus',
    //   icon: 'ti-panel',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { title: 'Level 1', type: 'empty' },
    //     {
    //       title: 'Level 2',
    //       type: 'sub',
    //       children: [
    //         { title: 'Level 2.0', type: 'empty' },
    //         { title: 'Level 2.1', type: 'empty' },
    //         { title: 'Level 2.2', type: 'sub', active: false, children: [
    //             { title: 'Level 2.2.1', type: 'empty' },
    //             { title: 'Level 2.2.2', type: 'empty' }
    //           ],
    //         },
    //       ],
    //     },
    //     { title: 'Level 3', type: 'empty' },
    //   ],
    // },
    // {
    //   title: 'Authentication',
    //   icon: 'ti-lock',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     { path: '/custom/signin', title: 'Sign In', type: 'link' },
    //     { path: '/custom/signup', title: 'Sign Up', type: 'link' },
    //     {
    //       path: '/custom/forgot-password',
    //       title: 'Forgot Password',
    //       type: 'link',
    //     },
    //     {
    //       path: '/custom/reset-password',
    //       title: 'Reset Password',
    //       type: 'link',
    //     },
    //     { path: '/custom/lockscreen', title: 'Lock Screen', type: 'link' },
    //     {
    //       path: '/custom-pages/under-construction',
    //       title: 'Under Construction',
    //       type: 'link',
    //     },
    //     { path: '/custom-pages/404-Error', title: '404 Error', type: 'link' },
    //     { path: '/custom-error/500-Error', title: '500 Error', type: 'link' },
    //   ],
    // },

    // { headTitle: 'Forms & Charts' },
    // {
    //   title: 'Forms',
    //   icon: 'ti-receipt',
    //   type: 'sub',
    //   badgeClass: 'bg-info',
    //   badgeValue: '6',
    //   active: false,
    //   children: [
    //     { path: '/forms/elements', title: 'Form Elements', type: 'link' },
    //     { path: '/forms/advanced', title: 'Advanced Forms', type: 'link' },
    //     { path: '/forms/layouts', title: 'Form Layouts', type: 'link' },
    //     { path: '/forms/validation', title: 'Form Validation', type: 'link' },
    //     { path: '/forms/wizards', title: 'Form Wizards', type: 'link' },
    //     { path: '/forms/editors', title: 'Form Editors', type: 'link' },
    //     {
    //       path: '/forms/form-element-sizes',
    //       title: 'Form Element sizes',
    //       type: 'link',
    //     },
    //   ],
    // },
    {
      id: '4',
      path: '/forms/wizards',
      title: 'Form Wizard',
      type: 'link',
      icon: 'fa fa-list-ol',
      active: false,
    },
    // {
    //   title: 'Charts',
    //   icon: 'ti-bar-chart-alt',
    //   type: 'sub',
    //   badgeClass: 'bg-danger',
    //   badgeValue: '5',
    //   active: false,
    //   children: [
    //     { path: '/charts/apex', title: 'Apex', type: 'link' },
    //     { path: '/charts/chartjs', title: 'Chart.js', type: 'link' },
    //     { path: '/charts/echart', title: 'Echart', type: 'link' },
    //     { path: '/charts/chartlist', title: 'Chartist', type: 'link' },
    //   ],
    // },
  ];

  //array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
