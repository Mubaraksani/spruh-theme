import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public submitted: boolean = false;
  isPasswordText = false
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private translate: TranslateService,
    private toast : ToastrService
    // private authAPIService: AuthApiService,
    // private global: GlobalService

  ) {
    if (this.authService.currentAgentUser) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // pass_Code: ['', Validators.required]
    })
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  togglePassword() {
    this.isPasswordText = !this.isPasswordText
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  Submit() {
    this.markFormGroupTouched(this.loginForm)
    if (this.loginForm.invalid) {
      return
    }
    let data = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
      // pass_Code: this.loginForm.get('pass_Code')?.value
    }
    this.authService.providerLogin(data);
  }

  registration() {
    this.router.navigate(["/auth/registration"]);
  }

}
