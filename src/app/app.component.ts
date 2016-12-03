import {Component, OnInit, OnDestroy} from '@angular/core';
import {LoginService} from "./Services";
import {User} from "./Models";
import {isNullOrUndefined} from "util";
import {Subscribable} from "rxjs/Observable";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  userLoggued:boolean;
  userData: User;
  private loginStateSubs: Subscription;
  constructor(private _loginService: LoginService){}

  ngOnInit(){
    this.userLoggued = this._loginService.isUserLoguedIn();
    this.loginStateSubs = this._loginService.loginState.subscribe((login)=> {
      console.log('login state',login);
      this.userLoggued = login.isUserLogued;
      this.userData = login.userData;
    });
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
    this.loginStateSubs.unsubscribe();
  }
}
