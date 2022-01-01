import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClinet: HttpClient) {
    if (localStorage.getItem(`userToken`) != null) {
      this.saveCurrentUser();
    }
  }
  
  currentUser = new BehaviorSubject(null);
  userName: any;

  saveCurrentUser() {
    let token: any = localStorage.getItem(`userToken`);
    this.currentUser.next(token);
    this.userName = this.currentUser.value;
  }


  login(finalLoginForm: object): Observable<any> {
    return this._HttpClinet.post(
      `https://animals.a3rff.com/api/Account/Login`,
      finalLoginForm
    );
  }
}
