import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../Models";
import {ProductService} from "../../Services";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private api: ProductService) { }

  loaders = {
    ProductList: false
  };

  Products: Observable<Product[]>;

  ngOnInit() {
    this.Products = this.api.GetAll();
  }

  ngOnDestroy(){
  }

}
