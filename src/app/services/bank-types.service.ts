import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from './base.service';

interface Response {
  code: number;
  message: string;
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class BankTypesService extends BaseService {

  public getBankTypes(): Observable<any> {
    return this.http.get<any>(this.BANK.URL);
  }

  public getAccountType() {
    return of([
      { cuenta: 'Corriente' },
      { cuenta: 'Ahorro' }
    ])
  }

  public getCustomers(): Observable<any> {
    return this.http.get<any>(this.BANK.CUSTOMER.GET_CUSTOMERS); 
  }

  public getCustomerTransfers(): Observable<any> {
    return this.http.get<any>(this.BANK.CUSTOMER.GET_HISTORY); 
  }

  public addCustomers(customer): Observable<any> {
    return this.http.post<any>(this.BANK.CUSTOMER.POST_CUSTOMER, customer);
  }

  public transfer(customer): Observable<any> {
    return this.http.post<any>(this.BANK.CUSTOMER.POST_TRANSFER, customer);
  }

}
