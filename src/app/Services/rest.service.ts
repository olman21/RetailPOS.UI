import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";

@Injectable()
export class RestService {

  headers: Headers;
  constructor(private http: Http, private loginService: LoginService) {
    let authHeader = this.loginService.getUserAuthHeader();

    this.headers = new Headers(authHeader);
  }

private setHeaders( headers: Headers) : void{
  if(headers){
    for(let key in headers){
      this.headers.append(key,headers[key]);
    }
  }
}

  public get<T>(url, headers?: Headers):Observable<T>{
   this.setHeaders(headers);
    return this.http.get(url,{headers: this.headers})
      .map(res=>res.json());
  }
  public post<T>(url,data, headers?: Headers):Observable<T>{
    this.setHeaders(headers);
    return this.http.post(url,data,{headers: this.headers})
            .map(res=>res.json());
  }

  public put(url,data, headers?: Headers):Observable<any>{
    this.setHeaders(headers);
    return this.http.put(url,data,{headers: this.headers});
  }
  public delete(url, headers?: Headers):Observable<any>{
    this.setHeaders(headers);
    return this.http.delete(url,{headers: this.headers});
  }


}
