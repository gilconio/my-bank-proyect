import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected BANK = environment.BANK_TYPES;

  constructor(protected http: HttpClient) { }
}
