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

  public getUsers() {
    return of([
      { usuario: 'pedro', id: 1 },
      { usuario: 'juan', id: 2 },
      { usuario: 'matias', id: 3 },
      { usuario: 'luis', id: 4 },
      { usuario: 'jose', id: 5 },
    ])
  }
}
