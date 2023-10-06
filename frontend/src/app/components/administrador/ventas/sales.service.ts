import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { product } from "../interfaces/productos";
import { sales } from '../interfaces/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  sales: any = [];
  salesCustomer: any = [];
  private sell: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private sellCustomer: BehaviorSubject<sales[]> = new BehaviorSubject<sales[]>([]);
  constructor(private http: HttpClient) { }

  getSales() {
    this.http.get('http://localhost:3001/api/Sales').subscribe(sales => {
      this.sales = sales;
      this.sell.next(this.sales)
    });
    return this.sell.asObservable()
  }

  getSalesCustomer(dni: any) {
    const dniCustomer = dni.value
    this.http.get(`http://localhost:3001/api/Sales/${dniCustomer}`).subscribe(sales => {
      this.salesCustomer = sales;
      this.sellCustomer.next(this.salesCustomer)
    });
    return this.sellCustomer.asObservable()
  }


}
