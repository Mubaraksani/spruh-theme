import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentAgentUserSubject: BehaviorSubject<User> ;
  public currentAgentUser: Observable<User> ;
  returnUrl: any;
  
  constructor(
    private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    let user = null
    if (localStorage.getItem("currentAgentUser")) {
      user = JSON.parse(localStorage.getItem("currentAgentUser")!)
    }
    this.currentAgentUserSubject = new BehaviorSubject<User>(
      user!
    );
    this.currentAgentUser = this.currentAgentUserSubject.asObservable();
   }

  public get currentAgentUserValue(): User {
    return this.currentAgentUserSubject.value;
  }

  providerLogin(data): void {
    console.log(data);
    let form_data = new FormData();
    form_data.append("email", data.email);
    form_data.append("password", data.password);
    this.router.navigate(['/dashboard']);
    localStorage.setItem('currentAgentUser', "1");
    // this.authAPIService.agentLogin(form_data)
    // 	.subscribe((res: any) => {
    // 		// console.log(res);
    // 		if (res.status == "Success") {
    // 			localStorage.setItem('authentication_token', res.data.authhenticationToken);
    // 			this._global.authentication_token = res.data.authhenticationToken;
    // 			// console.log(res.data.users.agent_id);					
    // 			localStorage.setItem('agent_id', res.data.users.agent_id);
    // 			this._global.agent_id = res.data.users.agent_id;
    // 			if (localStorage.getItem('authentication_token')) {
    // 				// this.router.navigate([this.returnUrl]);
    // 				this.router.navigate(["/auth/otp"], { skipLocationChange: true });
    // 			}
    // 		} else {
    // 			Swal.fire({
    // 				icon: 'info',
    // 				title: res.error,
    // 				text: res.message,
    // 				confirmButtonColor: "#FECC4E"
    // 			})
    // 			// console.log(res.message);
    // 		}
    // 	})
  }

  // agentLogin(data): void {
  // 	let form_data = new FormData();
  // 	form_data.append("email", this._global.encrypt(data.email));
  // 	form_data.append("password", this._global.encrypt(data.password));
  // 	// form_data.append("pass-code", this._global.encrypt(data.password));
  // 	let headerData = data.pass_Code;
  // 	// console.log(headerData);
  // 	this.authAPIService.agentLogin(form_data, headerData)
  // 		.subscribe((res: any) => {
  // 			// console.log(res);
  // 			if (res.status == "success") {
  // 				let res_data = { ...res['agent_details'], ...{ double_auth_key: res['security_codes'].double_auth_key }, ...{ agent_secret_key: headerData } }
  // 				localStorage.setItem('currentAgentUser', JSON.stringify(res_data));
  // 				if (localStorage.getItem('currentAgentUser')) {
  // 					this.currentAgentUserSubject.next(res_data)
  // 					// this.router.navigate([this.returnUrl]);
  // 					this.router.navigate(["/auth/otp"], { skipLocationChange: true });
  // 				}
  // 			} else {
  // 				Swal.fire({
  // 					icon: 'info',
  // 					title: res.error,
  // 					text: res.message,
  // 					confirmButtonColor: "#FECD53"
  // 				})
  // 				// console.log(res.message);
  // 			}
  // 		})
  // }

  // Logout Functionality
  providerLogout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentAgentUser');
    localStorage.removeItem('agent_id');
    localStorage.removeItem('authentication_token');
    localStorage.clear();
    if (!localStorage.getItem('currentAgentUser') && !localStorage.getItem('authentication_token')) {
      this.router.navigate(['/auth/login']).then(() => {
        this.currentAgentUserSubject.next({})
        window.location.reload();
      });
    }
    return of({ success: false });
  }
}
