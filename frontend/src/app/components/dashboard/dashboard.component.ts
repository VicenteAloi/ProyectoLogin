import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  listProducts: product[] = [];
  public oneProduct: product | undefined

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.listProducts = data;
    })
  }

  findProduct(item: product) {
    this.oneProduct = item;
    // console.log(this.oneProduct);
    this._productService.triggerProductInfo.emit({
      data: this.oneProduct
    })
  }

}
