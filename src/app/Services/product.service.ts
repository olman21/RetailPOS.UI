import { Injectable } from '@angular/core';
import {RestService} from "./rest.service";
import {ApiEndpoints} from "../config";
import {Observable} from "rxjs";
import {Product} from "../Models";

@Injectable()
export class ProductService {

  constructor(private api: RestService) { }

  public GetAll(): Observable<Product[]>{
    return this.api.get<Product[]>(ApiEndpoints.product);
  }

  public Get(id:string): Observable<Product>{
    return this.api.get<Product>(`${ApiEndpoints.product}/${id}`);
  }

}
