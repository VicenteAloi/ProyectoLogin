import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  listProducts: product[] = [];
  public oneProduct: product | undefined;
  modalRef: BsModalRef | undefined;

  constructor(private _productService: ProductService,
    private _modalService: BsModalService) { }

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.listProducts = data;
    })
  }

  findProduct(item: product) {
    this._productService.setProduct(item)
  }

  productInfo(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(template);
  }

}
