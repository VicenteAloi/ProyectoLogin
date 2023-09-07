import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/products'
  }

  getProducts(): Observable<products[]> {
    // const token = localStorage.getItem('token')
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    // return this.http.get<products[]>(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers });
    return this.http.get<products[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

}
