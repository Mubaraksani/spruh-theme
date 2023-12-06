import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';
import { LandingpageLayoutComponent } from './shared/layouts/landingpage-layout/landingpage-layout.component';
import { MessageLayoutComponent } from './shared/layouts/message-layout/message-layout.component';
import { Content_Routes,  Message_Routes } from './shared/routes/content.routes';
import {  Full_Content_Routes } from './shared/routes/full-content.routes';
import { landing_Routes } from './shared/routes/landingpage';
import { Error404Component } from './components/custom/error404/error404.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: AuthenticationComponent },
  { path: '', component: FullLayoutComponent, children: Full_Content_Routes , canActivate:[AuthGuard]},
  { path: '', component: ContentLayoutComponent, children: Content_Routes },
  { path: '', component: MessageLayoutComponent, children: Message_Routes },
  { path: '', component: LandingpageLayoutComponent, children: landing_Routes },
  { path: '**', redirectTo: 'error' },
  { path:'error', component: Error404Component}
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
