import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-shopping',
  templateUrl: './product-shopping.component.html',
  styleUrls: ['./product-shopping.component.css']
})
export class ProductShoppingComponent implements OnInit {
  newProduct: product | undefined;



  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProduct().subscribe((data) => {
      this.newProduct = data;
    });
  }

}
