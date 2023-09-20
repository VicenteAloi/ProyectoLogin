import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../interfaces/product';
import { NodeWithI18n } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  nullproduct: product = {
    id: 0,
    model: '',
    brand: '',
    description: '',
    price: 0,
    stock: 0,
    date_register: '',
    date_updated: '',
    image: ''
  }
  private productInfo: BehaviorSubject<product> = new BehaviorSubject<product>(this.nullproduct);

  setProduct(newProduct: product) {
    this.productInfo.next(newProduct);
  }
  getProduct() {
    return this.productInfo.asObservable();
  }


  @Output() triggerProductInfo: EventEmitter<any> = new EventEmitter();
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/products'
  }

  getProducts(): Observable<product[]> {
    // const token = localStorage.getItem('token')
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    // return this.http.get<products[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers });
    return this.http.get<product[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

}
