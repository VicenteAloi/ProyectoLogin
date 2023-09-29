import { Component, OnInit, afterNextRender } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-product-shopping',
  templateUrl: './product-shopping.component.html',
  styleUrls: ['./product-shopping.component.css']
})
export class ProductShoppingComponent implements OnInit {
  newProduct: product | undefined;
  product: any;
  listOfProducts: product[] = [];


  constructor(private _productService: ProductService,
    private activateRouter: ActivatedRoute) {


  }

  async ngOnInit() {
    this._productService.getProduct().subscribe((data) => {
      this.newProduct = data;
    });

    this.activateRouter.params.subscribe((param) => {
      this.product = param
      this.findProduct();
    })
  }


  findProduct() {
    this._productService.getProducts().subscribe((value) => {
      this.listOfProducts = value
      console.log(this.listOfProducts)

      let index = this.listOfProducts.findIndex((product) => product.id == this.product.id)
      console.log(index)
      this.newProduct = this.listOfProducts[index];
    })
  }
}

