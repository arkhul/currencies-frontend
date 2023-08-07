import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurrencyUserQueryListComponent} from "./currency-user-query-list/currency-user-query-list.component";
import {NewCurrencyQueryComponent} from "./new-currency-query/new-currency-query.component";

const routes: Routes = [
  { path: 'currencyUserQueryList', component: CurrencyUserQueryListComponent },
   { path: 'newCurrencyQuery', component: NewCurrencyQueryComponent},
  { path: '', redirectTo: 'currencyUserQueryList', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
