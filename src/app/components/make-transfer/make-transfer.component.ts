import { Component, OnInit } from '@angular/core';
import { BankTypesService } from 'src/app/services/bank-types.service';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css']
})
export class MakeTransferComponent implements OnInit {
  public users: any;
  public filterUser: any;

  constructor(private bankService: BankTypesService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public handleSearch(text) {
    this.filterUser = text.target.value;
  }

  private getUsers() {
    this.bankService.getUsers().subscribe(data => {
      this.users = data;
    })
  }
}
