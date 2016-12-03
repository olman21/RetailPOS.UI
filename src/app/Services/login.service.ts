import { Injectable } from '@angular/core';
import {Headers, Response, Http} from '@angular/http';
import 'rxjs/Rx';
import {ApiToken} from "../Models";
import {Observable, Subject} from "rxjs";
import {LocalStorageService} from "./local-storage.service";
import {Router} from "@angular/router";
import {User,Login} from "../Models";
import {ApiEndpoints} from "../config";
import {isNullOrUndefined} from "util";


const API_LOCALSTORAGE_KEY = "ApiToken";
const USER_DATA_KEY = "UserData";

@Injectable()
export class LoginService {

  loginState: Observable<Login>;
  private loginStateObserver: Subject<Login>;


  constructor(private http: Http, private _localStorageService: LocalStorageService, private _router: Router) {
    this.loginStateObserver = new Subject<Login>();
    this.loginState = this.loginStateObserver.asObservable();
  }

  login(username:string,password:string) : Observable<any>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let body = `username=${username}&password=${password}&grant_type=password`;
    return this.http.post(ApiEndpoints.auth,body, {headers:headers})
      .map((response:Response) => response.json())
      .catch((error:Response) => Observable.throw(error.json()));
  }

  private notifyLoginState(login: Login) {
    this.loginStateObserver.next(login);
  }

  startSession(apiToken: ApiToken, username: string):void{
    let serializedToken = JSON.stringify(apiToken);
    this._localStorageService.write(API_LOCALSTORAGE_KEY,serializedToken);

    this.http.get(`${ApiEndpoints.user}/${username}`)
      .map((res:Response)=> res.json())
      .subscribe(user=> {
          var serializedUser = JSON.stringify(user);
          this._localStorageService.write(USER_DATA_KEY,serializedUser);
          let login = new Login();
          login.isUserLogued = true;
          login.userData = user;
          this.notifyLoginState(login);
      });
  }

  isUserLoguedIn() : boolean{
    let apiToken: ApiToken = this._localStorageService.read<ApiToken>(API_LOCALSTORAGE_KEY);
    return !isNullOrUndefined(apiToken);
  }

  getUserAuthHeader():{ [p:string]: any}{
    let apiToken: ApiToken = <ApiToken>JSON.parse(this._localStorageService.read<string>(API_LOCALSTORAGE_KEY));

    if(!isNullOrUndefined(apiToken) && apiToken.access_token){
      return { Authorization: `bearer ${apiToken.access_token}` };
    }

  }

  logOut():void{
    this._localStorageService.write(API_LOCALSTORAGE_KEY,null);
    this._localStorageService.write(USER_DATA_KEY,null);
    let login = new Login();
    login.isUserLogued = false;
    this.notifyLoginState(login);
    this._router.navigate(['']);

  }

  public getUserData():User{
    return <User>JSON.parse(this._localStorageService.read<string>(USER_DATA_KEY));
  }
}
