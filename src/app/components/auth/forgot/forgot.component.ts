import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from '../shared/auth-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public forgotForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toast: ToastrService,
    private api: AuthApiService,
  ) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }
  get form() {
    return this.forgotForm.controls;
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
    this.markFormGroupTouched(this.forgotForm)
    if (this.forgotForm.invalid) {
      return
    }
    const form_data = new FormData();
    form_data.append('email', this.forgotForm.get('email')?.value);
    this.api.forgotPassword(form_data)
      .subscribe((res: any) => {
        this.toast.success(res.message, '', { timeOut: 3000 })
        this.router.navigate(['/auth/reset-password'])
      })
  }
}
