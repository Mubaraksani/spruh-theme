import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  form!: FormGroup;
  
  // dropzone
  files: File[] = [];
  
  dob!: NgbDateStruct;
  joinDate!: NgbDateStruct;
   /**date formate */
  //  YYYY-MM-DD
    // console.log(`${this.dob?.year} -${ this.dob?.month } -${ this.dob?.day }`);

  image_file;
  image_result;
  pdf_file;
  pdf_result;
  constructor(
    private fb : FormBuilder,
    private translate : TranslateService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      dob: ["", [Validators.required]],
      phone_number: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      joining_date: ["", [Validators.required]],
      position: ["", [Validators.required]],
      type: ["", [Validators.required]],
      profile_img: ["", [Validators.required]],
      resume: ["", [Validators.required]],
    });
  }
 
  submit(){
    this.markFormGroupTouched(this.form);
    if(this.form.invalid){
      return; 
    }
    console.log(this.form.value);
  }
  onSelect(event: any) {
    if (event.addedFiles.length > 5) {
      // event.preventDefault()
      Swal.fire({
        icon: 'info',
        text: 'Maximum five images are allowed'
      })
      return;
    }
    if (this.files.length + event.addedFiles.length > 5) {
      Swal.fire({
        icon: 'info',
        text: 'Maximum five images are allowed'
      })
      return;
    }
    this.files.push(...event.addedFiles);
    // if( this.files.length > 5 ){
    //   this.onRemove(event)
    // }
  }

  onRemove(event: any) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  /**get image file and url */
  getImage(event) {
    if (event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = e => this.image_result = reader.result;
      reader.readAsDataURL(event.target.files[0]);
      this.image_file = event.target.files[0];
    }
  }
  /**get file and url */
  getFile(event) {
    if (event.target.files.length > 0) {
      if (event.target.files[0].type == 'image/jpeg' || event.target.files[0].type == 'image/jpg' || event.target.files[0].type == 'image/png' || event.target.files[0].type == 'application/pdf') {
      }
      else {
        Swal.fire(
          this.translate.instant('Error!'),
          this.translate.instant('Accept image only!'),
          'error'
        );
        this.form.get('resume')?.setValue('')
        this.pdf_result = '';
        return
      }
      const reader = new FileReader();
      reader.onload = e => this.pdf_result = reader.result;
      console.log(this.pdf_result);
      
      reader.readAsDataURL(event.target.files[0]);
      this.pdf_file = event.target.files[0];
    }
  }
}
