import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginSubject = new BehaviorSubject<boolean>(false)
  loginStatus$ = this.loginSubject.asObservable()

  login(username :string , password :string): boolean {
    if(username === "admin" && password === "admin123"){

      this.loginSubject.next(true)
      return true
    }
    return false

  }

  logout(){
    this.loginSubject.next(false)
  }
  isLoggedIn():boolean {
    return this.loginSubject.value

  }

}
