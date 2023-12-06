import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm!: FormGroup;
  public submitted: boolean = false;
  isPasswordText = false
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private translate: TranslateService,
    private global: GlobalService
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      full_name: ['', [Validators.required, Validators.pattern("^[a-zA-ZÀ-ÿ-' ]+$")]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{6,16}$')]],
      // location: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get registrationFormControl() {
    return this.registrationForm.controls;
  }

  togglePassword() {
    this.isPasswordText = !this.isPasswordText
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
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
    this.markFormGroupTouched(this.registrationForm)
    if (this.registrationForm.invalid) {
      let form_data = new FormData()
      form_data.append("otp", this.registrationForm.get('otp')?.value,);
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
