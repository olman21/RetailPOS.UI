import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ProductService} from "../../Services";
import {Product} from "../../Models";

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit {

  constructor(private api: ProductService) { }

  loaders = {
    ProductList: false
  };

  Products: Observable<Product[]>;

  ngOnInit() {
    this.Products = this.api.GetAll();
  }

}
