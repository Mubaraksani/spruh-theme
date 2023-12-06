import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GlobalService } from 'src/app/shared/services/global.service';
import { MustMatch } from 'src/app/shared/validations/passwordValidator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public resetPasswordForm!: FormGroup;
	isNewPasswordText = false;
	isConfirmPasswordText = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private translate: TranslateService,
    private global: GlobalService
  ) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    }, {
      validator: MustMatch('new_password', 'confirm_password')
    })
  }

  get resetPasswordFormControl() {
    return this.resetPasswordForm.controls;
  }

  togglePasswordOne() {
    this.isNewPasswordText = !this.isNewPasswordText
  }

  togglePasswordTwo() {
    this.isConfirmPasswordText = !this.isConfirmPasswordText
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
    this.markFormGroupTouched(this.resetPasswordForm)
    if (this.resetPasswordForm.invalid) {
      let form_data = new FormData()
      form_data.append("otp", this.resetPasswordForm.get('otp')?.value,);
      // this.authAPIService._resend_otp(form_data)
      // 	.subscribe((res: any) => {
      // 		// this.toast.success(res.message, '', { timeOut: 3000 })
      // 		Swal.fire({
      // 			icon: 'success',
      // 			title: 'Success!',
      // 			text: res.message,
      // 			confirmButtonColor: '#6259ca'
      // 		})
      // 	})
    }
  }

}
