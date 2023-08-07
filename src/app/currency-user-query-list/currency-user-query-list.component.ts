import { Component } from '@angular/core';
import {CurrencyUserQuery} from "../currency-user-query";
import {CurrencyUserQueryService} from "../currency-user-query.service";

@Component({
  selector: 'app-currency-user-query-list',
  templateUrl: './currency-user-query-list.component.html',
  styleUrls: ['./currency-user-query-list.component.css']
})
export class CurrencyUserQueryListComponent {

  currencyUserQueries: CurrencyUserQuery[];

  constructor(private currencyUserQueryService: CurrencyUserQueryService) {
  }

  ngOnInit() {
    this.getCurrencyUserQueryList();
  }

  private getCurrencyUserQueryList() {
    this.currencyUserQueryService.getCurrencyUserQueryList().subscribe(data => {
      this.currencyUserQueries = data;
    });
  }
}
