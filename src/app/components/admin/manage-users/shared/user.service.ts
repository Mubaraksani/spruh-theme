import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getUserList(data) {
    return this.http.post(`${environment.apiUrl}/adminPanel/influencer_list/`, data)
  }
  activeInactiveStatus(data) {
    return this.http.post(`${environment.apiUrl}/adminPanel/influencer_status/`, data)
  }
}
