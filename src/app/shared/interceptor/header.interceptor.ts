import { Inject, Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services/auth.service';
import { GlobalService } from '../services/global.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(
    private translate: TranslateService,
    private _auth: AuthService,
    private _global: GlobalService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this._auth.currentAgentUser
    if (user) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${this._global.authentication_token}`,
          // 'Accept-Language': localStorage.getItem('lang') ? localStorage.getItem('lang')! : 'fr'
        }
      })
    }
    // if (request.body instanceof FormData) {
    //   request = request.clone({
    //     body: request.body.append('lang', this.translate.currentLang)
    //   })
    // }
    return next.handle(request);
  }
}
