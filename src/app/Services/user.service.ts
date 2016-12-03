import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "../Models";
import {RestService} from './rest.service';
import {ApiEndpoints} from "../config";

@Injectable()
export class UserService {

  constructor(private api: RestService) { }

  public GetAll() : Observable<User[]>{
    return this.api.get<User[]>(ApiEndpoints.user);
  }
  public Get(id: number) : Observable<User>{
    return this.api.get<User>(`${ApiEndpoints.user}/${id}`);
  }

  public GetByUsername(username: string) : Observable<User>{
    return this.api.get<User>(`${ApiEndpoints.user}/${username}`);
  }
}
