import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationApiService {

  constructor(private http : HttpClient) { }

  /**get notification list api  */
  getAllNOtifications(data) {
    return this.http.post(`${environment.apiUrl}/indexingOperator/notificationList`, data)
  }
  /**delete notification  api  */
  deleteNotification(data) {
    return this.http.post(`${environment.apiUrl}/indexingOperator/notificationList`, data)
  }
  /**add notification  api  */
  addNotification(data) {
    return this.http.post(`${environment.apiUrl}/indexingOperator/notificationList`, data)
  }
  /**mark single read notification  api  */
  markSingleNotification(data) {
    return this.http.post(`${environment.apiUrl}/indexingOperator/notificationList`, data)
  }
  /**mark all read notification  api  */
  markAllNotification(data) {
    return this.http.post(`${environment.apiUrl}/indexingOperator/notificationList`, data)
  }
}
