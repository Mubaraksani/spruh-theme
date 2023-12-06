import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, Observable, of, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    // private global: GlobalService
  ) { }
  httpOptions

  httpHeader() {
    return this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': this.translate.currentLang,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
  }

  // agentLogin(data){
  //   return this.http.post(`${environment.apiUrl}power/login`, data)
  // }
  // agentLogin(data, headerData) {
  // 	const options = {
  // 		...{
  // 			headers: new HttpHeaders({
  // 				'agent-secret-key': headerData
  // 			})
  // 		}
  // 	}
  // 	// console.log(options);
  // 	// data.append('lang', this.global.selectedLanguage);
  // 	return this.http.post(`${environment.apiUrl}/Manage_Agent/Login`, data, options)
  // }

  agentLogin(data) {
    return this.http.post(`${environment.apiUrl}/Manage_Agent/Login`, data)
  }

  otp_verification(data) {
    return this.http.post(`${environment.apiUrl}/Manage_Agent/ValidateAgentOTP`, data)
  }
  _resend_otp(data) {
    return this.http.post(`${environment.apiUrl}power/login`, data)
  }
  forgotPassword(data) {
    return this.http.post(`${environment.apiUrl}power/requestForgotPassword`, data)
  }
  resetPassword(data) {
    return this.http.post(`${environment.apiUrl}power/changeforgetPassword`, data)
  }
}
