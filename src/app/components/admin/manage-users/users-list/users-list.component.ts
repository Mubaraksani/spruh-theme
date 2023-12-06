import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  page = 1;
  size = 10;
  search: string = '';
  totalSize = 0;
  user_id;
  displayOrders;
  locations;
  location;
  status;
  User_list;
  constructor(
    private toast: ToastrService,
    private api : UserService,
    private router : Router,
    public translate : TranslateService,

  ) { }

  ngOnInit(): void {
    /**Api call which is with filter from backend */
    // this.getInUserList();
    /**Api call which is without filter from backend */
    this.getOrdersList();
    /**creates new array for filter with location from array  */
    this.getLocations();
  }

  pageReset() {
    this.page = 1;
    /**Api call which is with filter from backend */
    // this.getInUserList();
    /**Api call which is without filter from backend */
    this.getOrdersList();
  }
 
  orders = [
    { id: '#W83549801', invoice: '1', name: 'Anna Sthesia', date: '08/11/2020', total: 1000, warehouse: 'Boston', status: false, statusbg: 'bg-warning' },
    { id: '#W83549802', invoice: '2', name: 'Barb Dwyer', date: '15/11/2020', total: 4577, warehouse: 'Washington DC', status: true, statusbg: 'bg-success' },
    { id: '#W83549803', invoice: '3', name: 'Wilma Mumduya', date: '17/11/2020', total: 4500, warehouse: 'San Francisco', status: true, statusbg: 'bg-success' },
    { id: '#W83549804', invoice: '4', name: 'Zack Lee', date: '18/11/2020', total: 3266, warehouse: 'Las Vegas', status: true, statusbg: 'bg-info' },
    { id: '#W83549805', invoice: '5', name: 'Tom Foolery', date: '20/11/2020', total: 130000, warehouse: 'Los Angeles', status: false, statusbg: 'bg-danger' },
    { id: '#W83549806', invoice: '6', name: 'Pat Agonia', date: '22/11/2020', total: 253, warehouse: 'Chicago', status: true, statusbg: 'bg-success' },
    { id: '#W83549807', invoice: '7', name: 'Mary Christmas', date: '26/11/2020', total: 1526, warehouse: 'Los Angeles', status: false, statusbg: 'bg-danger' },
    { id: '#W83549808', invoice: '8', name: 'Ella Vator', date: '29/11/2020', total: 1500, warehouse: 'Chicago', status: false, statusbg: 'bg-warning' },
    { id: '#W83549809', invoice: '9', name: 'Sharon Needles', date: '01/12/2020', total: 230000, warehouse: 'UK', status: true, statusbg: 'bg-success' },
    { id: '#W83549810', invoice: '10', name: 'Anne Fibbiyon', date: '04/12/2020', total: 33990, warehouse: 'Chicago', status: true, statusbg: 'bg-info' },
    { id: '#W83549811', invoice: '11', name: 'Frank Senbeans', date: '09/12/2020', total: 12999, warehouse: 'Chicago', status: false, statusbg: 'bg-danger' },
    { id: '#W83549812', invoice: '12', name: 'Chris P. Bacon', date: '12/12/2020', total: 15993, warehouse: 'Brazil', status: true, statusbg: 'bg-success' },
  ]
  getOrdersList(){
    // const form_data = new FormData();
    // form_data.append("language", this.translate.currentLang);
    // this.api.getUserList(form_data)
    //   .subscribe((res: any) => {
    //     if (res.status === "success") {
    /** Handle api response data with page and size from frontend use below part*/
          const startIndex = (this.page - 1) * this.size;
          const endIndex = (startIndex + + this.size);
          this.displayOrders = this.orders.slice(startIndex, endIndex);
          this.totalSize = this.orders.length;

      //     this.User_list = res.influencer_list_data;
      //     this.totalSize = res.totalItems;
      //   } else {
      //     Swal.fire({
      //       icon: 'info',
      //       title: res.error,
      //       text: res.message,
      //       confirmButtonColor: "#db5e70"
      //     })
      //   }
      // })
  }
  getLocations(){
    const uniqueWarehouses = Array.from(new Set(this.orders.map(order => order.warehouse)));
    this.locations = uniqueWarehouses;
  }
  RemoveElementFromObjectArray(key: any) {
    this.orders.forEach((value, index) => {
      if (value.id == key) this.orders.splice(index, 1);
    });
  }

  getInUserList() {
    const form_data = new FormData();
    form_data.append("search_influencer", this.search);
    form_data.append("page", this.page.toString());
    form_data.append("rows", this.size.toString());
    /**add more form_data with backend key if any  e.g*/
    // form_data.append("location", this.location);
    // form_data.append("status", this.status);
    form_data.append("language", this.translate.currentLang);
    this.api.getUserList(form_data)
      .subscribe((res: any) => {
        // this.toast.success(res.message)
        if (res.status === "success") {
          this.User_list = res.influencer_list_data;
          this.totalSize = res.totalItems;
        } else {
          Swal.fire({
            icon: 'info',
            title: res.error,
            text: res.message,
            confirmButtonColor: "#db5e70"
          })
        }
      })
  }
  activeInactive(i, item, event) {
    this.user_id = item.invoice;
    event.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      text: this.translate.instant(event.target.checked ? 'You want to active it?' : 'You want to inactive it?'),
      showCancelButton: true,
      // confirmButtonColor: '#db5e70',
      // cancelButtonColor: '#131212',
      confirmButtonText: this.translate.instant(event.target.checked ? 'Yes, Active It' : 'Yes, Inactive It'),
      cancelButtonText: this.translate.instant("Cancel")
      // reverseButtons: true
    }).then((result: any) => {
      if (result.value) {
        // const form_data = new FormData()
        // form_data.append("user_id", this.user_id);
        // form_data.append("language", this.translate.currentLang);
        // form_data.append('status', (!event.target.checked == true) ? '1' : '0')
        // this.api.activeInactiveStatus(form_data)
        //   .subscribe((res: any) => {
        //     if (res.status === "success") {
        //       this.toast.success(res.message, '', { timeOut: 3000 })
        //       this.getUserList();
        //     } else {
        //       Swal.fire({
        //         icon: 'info',
        //         text: res.message,
        //         confirmButtonColor: "#db5e70"
        //       })
        //     }
        //   })
      }
    })
  }
  filter() {
    /**Filter with backend */
    // this.getInUserList();

    /**Filter with frontend */
    let filteredOrders = this.displayOrders; // Start with the original orders array
    // Apply location filter if location is specified
    if (this.location != null) {
      filteredOrders = filteredOrders.filter(order => order.warehouse === this.location);
    }
    // Apply status filter if status is specified
    if (this.status != null && this.status === 'active') {
      filteredOrders = filteredOrders.filter(order => order.status === true);
    } else if (this.status != null && this.status === 'inactive') {
      filteredOrders = filteredOrders.filter(order => order.status === false);
    }
    // Apply search filter if search is specified
    if (this.search !== '') {
      const searchTerm = this.search.toLowerCase();
      filteredOrders = filteredOrders.filter(order =>
        order.name.toLowerCase().includes(searchTerm) ||
        order.id.toLowerCase().includes(searchTerm)
      );
    }
    this.displayOrders = filteredOrders; // Update the displayOrders array with the filtered data
  }

clearAction(){
  this.search ="";
  this.location = null;
  this.status = null;
  /**below call list api */
  /**Filter with backend */
  // this.getInUserList();
  
  /**Filter with frontend */
  this.getOrdersList(); 
}
  deleteAction(id){
    Swal.fire({
      icon: 'info',
      title: this.translate.instant('Are you sure') + '?',
      text: this.translate.instant("You won't be able to revert this!"),
      showCancelButton: true,
      // confirmButtonColor: '#db5e70',
      // cancelButtonColor: '#131212',
      confirmButtonText: 'Yes, Delete It!',
      // reverseButtons: true
    }).then((result: any)=>{
      if(result.value){
        this.RemoveElementFromObjectArray(id)
        // const form_data = new FormData();
        // form_data.append("influencer_id", this.influencerID);
        // form_data.append("custom_id", this.customID);
        // form_data.append("language", this.translate.currentLang);
        // this.api.deleteInfluencer(form_data)
        //   .subscribe((res: any) => {
        //     if (res.status === "success") {
        //       this.toast.success(res.message, '', { timeOut: 3000 })
        //       this.getInfluencerList();
        //     } else {
        //       Swal.fire({
        //         icon: 'info',
        //         text: res.message,
        //         confirmButtonColor: "#db5e70"
        //       })
        //     }
        //   })
      }
    })
  }
  addUsers(){
    this.router.navigate(['/users/add-users'])
  }
}
