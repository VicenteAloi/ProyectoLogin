import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
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
