import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// COMPONENTS 
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { NotificationSidebarComponent } from './components/notification-sidebar/notification-sidebar.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { MessageLayoutComponent } from './layouts/message-layout/message-layout.component';
import { ErrorLayoutComponent } from './layouts/error-layout/error-layout.component';
import { CustomizerComponent } from './components/customizer/customizer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
// DIRECTIVES 
import { FullscreenToggleDirective } from './directives/fullscreen-toggle.directive';
import { HoverEffectSidebarDirective } from './directives/hover-effect-sidebar.directive';
import { ToggleThemeDirective } from './directives/toggle-theme.directive';
import { SidemenuToggleDirective } from './directives/sidemenuToggle';
import { LandingPageSidemenuToggleDirective } from './directives/landingPageSidemenuToggle';

// PLUGINS
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { LandingpageLayoutComponent } from './layouts/landingpage-layout/landingpage-layout.component';
import { ColorPickerModule } from 'ngx-color-picker';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateModule } from '@ngx-translate/core';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};


@NgModule({
  declarations: [ FooterComponent, HeaderComponent, LoaderComponent, TapToTopComponent, SidemenuComponent, NotificationSidebarComponent, FullLayoutComponent, ContentLayoutComponent, FullscreenToggleDirective,  MessageLayoutComponent, ErrorLayoutComponent, CustomizerComponent, HoverEffectSidebarDirective, ToggleThemeDirective, SidemenuToggleDirective, LandingpageLayoutComponent, PageHeaderComponent, LandingPageSidemenuToggleDirective ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgSelectModule,
    ColorPickerModule,
    PerfectScrollbarModule,
    TranslateModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    LoaderComponent, 
    TapToTopComponent,
    FooterComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
    PageHeaderComponent,
    LandingPageSidemenuToggleDirective,
    TranslateModule
  ],
  schemas: []
})
export class SharedModule { }
