import { Component, OnInit } from '@angular/core';
import { BankTypesService } from 'src/app/services/bank-types.service';
import { UnsubscribeOnDestroy } from 'src/app/utils/unsubscribe-on-destroy';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent extends UnsubscribeOnDestroy implements OnInit {

  public userTransfer: any;
  constructor(private bankService: BankTypesService) { 
    super();
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.bankService.getCustomerTransfers().subscribe(data => {      
      this.userTransfer = data.payload;      
    })
  }

}
