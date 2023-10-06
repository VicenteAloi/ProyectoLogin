import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductoService } from '../producto.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { product } from '../../interfaces/productos';

@Component({
  selector: 'app-produc-list',
  templateUrl: './produc-list.component.html',
  styleUrls: ['./produc-list.component.scss']
})
export class ProducListComponent implements OnInit{
  productosRegistrados:product[]=[];
  product:any;
  constructor(private productoS: ProductoService,private modalService: BsModalService){}

  ngOnInit():void {
    this.productoS.retraiveProducts().subscribe(respuesta=>this.productosRegistrados=respuesta);
  }

  deleteProducto(indice:number){
    const produ = this.productosRegistrados[indice];
    this.productoS.deleteProducto(produ).subscribe({
      complete:() =>{ this.productoS.retraiveProducts()},
      error: (error)=>console.log(error)});
  };

  modalRef?: BsModalRef;
  openModal(template: TemplateRef<any>, index:number) {
    this.product = this.productosRegistrados[index];
    this.modalRef = this.modalService.show(template);
  }
}
