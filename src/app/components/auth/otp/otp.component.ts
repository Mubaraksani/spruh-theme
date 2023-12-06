import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthApiService } from '../shared/auth-api.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  OTP_Form!: FormGroup;
  public maskOTP = [/\d/, '-', /\d/, '-', /\d/, '-', /\d/, '-', /\d/, '-', /\d/];
  userData: any
  returnUrl: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private authAPIService: AuthApiService,
    private translate: TranslateService,
    private toast: ToastrService,
  ) { 
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit(): void {
    this.OTP_Form = this.formBuilder.group({
      // otp: ["", Validators.required,],
      otp: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.OTP_Form.controls;
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  submitOTP() {
    this.markFormGroupTouched(this.OTP_Form)
    if (this.OTP_Form.invalid) {
      return
    }
    let data = {
      otp: this.OTP_Form.get('otp')?.value,
    }
    // this.router.navigate(['/admin/dashboard']);
    // this.authService.otpVerification(data);
  }

  resendOTP() {
    let form_data = new FormData()
    form_data.append("otp", this.OTP_Form.get('otp')?.value,);
    this.authAPIService._resend_otp(form_data)
      .subscribe((res: any) => {
        // this.toast.success(res.message, '', { timeOut: 3000 })
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: res.message,
          confirmButtonColor: '#6259ca'
        })
      })
  }

  /**
     * Marks all controls in a form group as touched
     * @param formGroup The form group to touch
     */
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
