import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { product } from 'src/app/interfaces/product';



@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {
  @Input() oneProduct: product | undefined;
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.triggerProductInfo.subscribe(data => {
      console.log(data);
      this.oneProduct = data;
    })
  }
}
