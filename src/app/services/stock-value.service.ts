import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class StockValueService {

  stockApi: string = 'https://localhost:5001/api/stock/';

  constructor(private http: HttpClient) { }

  //GET{name}
  getStock(searchName: string): Observable<string> {
    let x = this.stockApi + searchName;
    return this.http.get<string>(x, httpOptions);
  }
}
