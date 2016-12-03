import {Component, OnInit, OnDestroy, Input } from '@angular/core';
import {LoginService} from "../../Services/login.service";
import {User} from "../../Models";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit, OnDestroy {

  @Input() userData: User;


  public logout():void{
    this._loginService.logOut();
  }
  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    if(isNullOrUndefined(this.userData)){
      this.userData = this._loginService.getUserData();
    }
  }

  ngOnDestroy(){
  }

}
