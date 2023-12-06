import { Component, OnInit } from '@angular/core';
import { NotificationApiService } from '../shared/notification-api.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  page = 1;
  search: string = '';
  totalSize = 0;
  indexNumber = 1;
  size = 10;

  form!: FormGroup;
  userType;
  notification_list: any = [];
  notificationID: any;
  notificationType;
  notificationTypeArr: any = [
    {
      label: "Sent",
      value: true,
    },
    {
      label: "Received",
      value: true,
    },
  ];
  userTypeArr = [
    { label: 'Indexing Operator', value: 'indexingOperator', },
    { label: 'Quality Controller', value: 'qualityController', },
    { label: 'Supervisor', value: 'superVisor', },
    // { label: 'Doctor Assistant', value: 'assistant', },
    // { label: 'Patient', value: 'patient', },
  ];
  constructor(
    private api: NotificationApiService,
    private modalService : NgbModal,
    private fb: FormBuilder,
    private translate: TranslateService,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      user_type: ["", [Validators.required]],
      notification_title: ["", [Validators.required]],
      notification_message: ["", [Validators.required]],
    });
    // this.getNotificationList();
  }
  pageReset() {
    this.page = 1
    this.getNotificationList();
  }

  // Notification List Functionality
  getNotificationList() {
    const form_data = new FormData();
    form_data.append('page', this.page.toString());
    form_data.append('size', this.size.toString());
    // form_data.append('search', this.search);
    // if(this.notificationType && this.notificationType === 'Sent'){
    // 	form_data.append('sent', '1');
    // }
    // if(this.notificationType && this.notificationType === 'Received'){
    // 	form_data.append('received', '1');
    // }
    this.api.getAllNOtifications(form_data)
      .subscribe((res: any) => {
        // this.toast.success(res.message)
        if (res.response === "success") {
          this.notification_list = res.data;
          this.totalSize = res.totalCount;
        } else {
          Swal.fire({
            icon: 'info',
            title: res.error,
            text: res.message,
            // confirmButtonColor: "#0e528b"
          })
        }
      })
  }
  filterAction() {
    const form_data = new FormData();
    form_data.append('page', this.page.toString());
    form_data.append('limit', this.size.toString());
    // form_data.append('search', this.search);
    // if(this.notificationType && this.notificationType === 'Sent'){
    // 	form_data.append('sent', '1');
    // }
    // if(this.notificationType && this.notificationType === 'Received'){
    // 	form_data.append('received', '1');
    // }
    this.api.getAllNOtifications(form_data)
      .subscribe((res: any) => {
        // this.toast.success(res.message)
        if (res.response === "success") {
          this.notification_list = res.notifications;
          this.totalSize = res.totalCount;
        } else {
          Swal.fire({
            icon: 'info',
            title: res.error,
            text: res.message,
            // confirmButtonColor: "#0e528b"
          })
        }
      })
  }

  clearAction() {
    this.search = "";
    this.notificationType = '';
    this.getNotificationList();
  }

  notificationModalOpen(modal: any) {
    this.modalService.open(modal, { centered: true, backdrop: 'static', keyboard: false });
  }

  addNotification(modal: any) {
    // console.log(this.markFormGroupTouched(this.form));
    this.markFormGroupTouched(this.form)
    if (this.form.valid) {
      const form_data = new FormData();
      form_data.append('notificationTitle', this.form.get('notification_title')?.value);
      form_data.append('notificationMessage', this.form.get('notification_message')?.value);

      if (this.userType) {
        let data = [];
        data = Array.from(this.userType);
        // data = JSON.parse(data);
        data.forEach(item => {
          form_data.append('receiverType', item)
        })
      }
      this.api.addNotification(form_data)
        .subscribe((res: any) => {
          this.toast.success(res.message, '', { timeOut: 3000 })
          this.getNotificationList();
          this.form.reset();
          modal.close();
        })
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

  markSingleNotification(item) {
    this.notificationID = item._id;
    Swal.fire({
      icon: 'info',
      title: 'Are you sure',
      text: this.translate.instant('You want to mark this notification as read?'),
      showCancelButton: true,
      // confirmButtonColor: '#0e528b',
      // cancelButtonColor: '#F8D201',
      confirmButtonText: this.translate.instant('Yes, Mark It'),
      cancelButtonText: this.translate.instant("Cancel")
      // reverseButtons: true
    }).then((result: any) => {
      if (result.value) {
        const form_data = new FormData()
        form_data.append("notification_id", this.notificationID);
        this.api.markSingleNotification(form_data)
          .subscribe((res: any) => {
            if (res.response === "success") {
              this.toast.success(res.message, '', { timeOut: 3000 })
              this.getNotificationList();
            } else {
              Swal.fire({
                icon: 'info',
                text: res.message,
                // confirmButtonColor: "#0e528b"
              })
            }
          })
      }
    })
  }

  markAllNotification() {
    // this.notificationID = item._id;
    Swal.fire({
      icon: 'info',
      title: 'Are you sure',
      text: this.translate.instant('You want to mark all notifications as read?'),
      showCancelButton: true,
      // confirmButtonColor: '#0e528b',
      // cancelButtonColor: '#F8D201',
      confirmButtonText: this.translate.instant('Yes, Mark It'),
      cancelButtonText: this.translate.instant("Cancel")
      // reverseButtons: true
    }).then((result: any) => {
      if (result.value) {
        const form_data = new FormData()
        this.api.markAllNotification(form_data)
          .subscribe((res: any) => {
            if (res.response === "success") {
              this.toast.success(res.message, '', { timeOut: 3000 })
              this.getNotificationList();
            } else {
              Swal.fire({
                icon: 'info',
                text: res.message,
                // confirmButtonColor: "#0e528b"
              })
            }
          })
      }
    })
  }

  deleteNotification() {
    // this.notificationID = item._id;
    Swal.fire({
      icon: 'info',
      title: 'Are you sure',
      text: this.translate.instant('You want to delete this notifications?'),
      showCancelButton: true,
      // confirmButtonColor: '#0e528b',
      // cancelButtonColor: '#F8D201',
      confirmButtonText: this.translate.instant('Yes, Delete It'),
      cancelButtonText: this.translate.instant("Cancel")
      // reverseButtons: true
    }).then((result: any) => {
      if (result.value) {
        const form_data = new FormData()
        form_data.append('notification_id', this.notificationID)
        this.api.deleteNotification(form_data)
          .subscribe((res: any) => {
            if (res.response === "success") {
              this.toast.success(res.message, '', { timeOut: 3000 })
              this.getNotificationList();
            } else {
              Swal.fire({
                icon: 'info',
                text: res.message,
                // confirmButtonColor: "#0e528b"
              })
            }
          })
      }
    })
  }
}
