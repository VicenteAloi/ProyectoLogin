import { Component } from '@angular/core';
import { products } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  listProducts: products[] = []
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.listProducts = data;
    })
  }

}
