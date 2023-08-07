import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CurrencyUserQuery} from "./currency-user-query";

@Injectable({
  providedIn: 'root'
})
export class CurrencyUserQueryService {

  private baseURLGet = "http://localhost:8080/currencies/requests";
  private baseURLPost = "http://localhost:8080/currencies/get-current-currency-value-command";

  constructor(private httpClient: HttpClient) { }

  getCurrencyUserQueryList(): Observable<CurrencyUserQuery[]> {
    return this.httpClient.get<CurrencyUserQuery[]>(`${this.baseURLGet}`);
  }

  createCurrencyUserQuery(currencyUserQuery: CurrencyUserQuery): Observable<Object> {
    return this.httpClient.post(`${this.baseURLPost}`, currencyUserQuery);
  }
}
