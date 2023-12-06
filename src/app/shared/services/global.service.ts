import { Injectable } from '@angular/core';
import { User } from '../modals/user';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  authentication_token
  agent_id
  currentUser!: User;
  selectedLanguage;

  key = CryptoJS.SHA256('S3SAN00RI').toString(CryptoJS.enc.Hex).substr(0, 32);    //length 32
  iv = CryptoJS.SHA256('NooriSESA').toString(CryptoJS.enc.Hex).substr(0, 16);
  
  constructor() {
    if (localStorage.getItem("agent_id")) {
			this.agent_id = JSON.parse(localStorage.getItem("agent_id")!)
		}
		if (localStorage.getItem('authentication_token')) {
			this.authentication_token = localStorage.getItem('authentication_token');
		}
		// console.log(this.agent_id);
		// console.log(this.authentication_token);
		
  }

  // Old Encryption Functionality
  // encrypt(data) {
  // 	let cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(this.key), {
  // 		iv: CryptoJS.enc.Utf8.parse(this.iv)
  // 	});
  // 	return cipher.toString();
  // }

  // New Encryption Functionality
  encrypt(data) {
    let cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(this.key), {
      iv: CryptoJS.enc.Utf8.parse(this.iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.AnsiX923
    });
    return cipher.toString();
  }

  // Old Decryption Functionality
  // decrypt(data) {
  // 	if (data) {
  // 		let cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(this.key), {
  // 			iv: CryptoJS.enc.Utf8.parse(this.iv)
  // 		});
  // 		return cipher.toString(CryptoJS.enc.Utf8);
  // 	} else {
  // 		return '';
  // 	}
  // }

  // New Decryption Functionality
  decrypt(data) {
    if (data) {
      let cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(this.key), {
        iv: CryptoJS.enc.Utf8.parse(this.iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.AnsiX923
      });
      return cipher.toString(CryptoJS.enc.Utf8);
    } else {
      return '';
    }
  }
}
