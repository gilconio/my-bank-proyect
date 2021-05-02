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
      { usuario: 'pedro' },
      { usuario: 'juan' },
      { usuario: 'matias' },
      { usuario: 'luis' },
      { usuario: 'jose' },
    ])
  }
}
