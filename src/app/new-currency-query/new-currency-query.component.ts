import { Component } from '@angular/core';
import {CurrencyUserQuery} from "../currency-user-query";
import {CurrencyUserQueryService} from "../currency-user-query.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-currency-query',
  templateUrl: './new-currency-query.component.html',
  styleUrls: ['./new-currency-query.component.css']
})
export class NewCurrencyQueryComponent {

  currencyUserQuery: CurrencyUserQuery = new CurrencyUserQuery();
  currencyCodes = ['EUR', 'USD', 'THB', 'AUD', 'HKD', 'CAD', 'NZD', 'SGD', 'HUF', 'CHF', 'GBP', 'UAH', 'JPY',
    'CZK', 'DKK', 'ISK', 'NOK', 'SEK', 'RON', 'BGN', 'TRY', 'ILS', 'CLP', 'PHP', 'MXN', 'ZAR', 'BRL', 'MYR', 'IDR',
    'INR', 'KRW', 'CNY', 'XDR'];
  selected: string = 'EUR';

  constructor(private currencyUserQueryService: CurrencyUserQueryService,
              private router: Router) {
  }

  ngOnInit() {
  }

  saveCurrencyQuery() {
    this.currencyUserQuery.currency = this.selected;
    this.currencyUserQueryService.createCurrencyUserQuery(this.currencyUserQuery).subscribe(data => {
        console.log(data);
        this.goToCurrencyUserQueryList();
      },
      error => console.log(error));
  }

  goToCurrencyUserQueryList() {
    this.router.navigate(['/currencyUserQueryList']);
  }

  onSubmit() {
    console.log(this.currencyUserQuery);
    this.saveCurrencyQuery();
  }
}
