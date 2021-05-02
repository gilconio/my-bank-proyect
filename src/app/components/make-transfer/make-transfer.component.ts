import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BankTypesService } from 'src/app/services/bank-types.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.css']
})
export class MakeTransferComponent implements OnInit {
  public users: any;
  public filterUser: any;
  public amountTransfer: FormGroup;

  constructor(private bankService: BankTypesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getUsers();
    this.createForm();
  }

  public handleSearch(text) {
    this.filterUser = text.target.value;
  }

  private getUsers() {
    this.bankService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  createForm() {
    this.amountTransfer = this.fb.group({
      amount: ['', [Validators.required, Validators.minLength(5)]]   

    })
  }

  get invalidAmount() {
    return this.amountTransfer.get('amount').invalid && this.amountTransfer.get('amount').touched
  }

  sendTransfer() {
    if (this.amountTransfer.invalid) {
      this.amountTransfer.markAllAsTouched();
      console.log('entra');
      
      
    } else {
      Swal.fire(
        'Transferencia realizada con éxito',
        '',
        'success'
      )
      this.amountTransfer.reset();
    }



  }
}
