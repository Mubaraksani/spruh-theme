import { Inject, Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private translate: TranslateService,
    private router: Router,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        // tap(data => console.log(data)),
        catchError((error: HttpErrorResponse) => {
          // if (error.error instanceof HttpErrorResponse) {
          //   console.error('An error occurred:', error.message);
          // } else {
          //   console.error(
          //     `Backend returned code ${error.status}, ` +
          //     `body was: ${error.error.message || error.statusText}`);
          // }
          if (error.status === 401) {
            //  Swal.fire( 
            //   this.translate.instant('Alert!'),
            //   this.translate.instant(error.error.message),
            //   'info'
            // )
            Swal.fire({
              title: this.translate.instant('Unauthorized!'),
              // text: this.translate.instant(error.error.message),
              text: this.translate.instant("Please login again to continue."),
              icon: 'info',
              // confirmButtonColor: '#FECC4E'
            }).then(result => {
              localStorage.clear();
              this.router.navigate(['/auth/login']).then(() => {
                window.location.reload();
              });
            })
          } else if (error.status == 0) {
            Swal.fire(
              'Connection Is Not Stable',
              'Please check your internet connection. It seems that it is not stable. <br>Detail:' + " " + error.message,
              'question'
            )
          } else if (error.status == 400) {
            Swal.fire({
              title: this.translate.instant('Alert!'),
              // text: this.translate.instant(error.error.message),
              text: this.translate.instant(error.error.message),
              icon: 'info',
              // confirmButtonColor: '#FECC4E'
            })
          }
          else {
            // Swal.fire(

            //   this.translate.instant(error.error.message || error.statusText),
            //   'error',
            //   confirmButtonColor: '#6259ca'
            // )
            Swal.fire({
              title: this.translate.instant('Error!'),
              text: this.translate.instant(error.error.message || error.statusText),
              icon: 'error',
              // confirmButtonColor: '#FECC4E'
            })
          }
          return throwError(() => new Error(error.error.message));
        })
      );
  }
}

