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
  public recipient: any;
  public userName: any;

  constructor(private bankService: BankTypesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCustomers();
    this.createForm();
  }

  public handleSearch(text) {
    this.filterUser = text.target.value;
  }

  private getCustomers() {
    this.bankService.getCustomers().subscribe(data => {      
      this.users = data.payload;
      console.log(this.users);
      
    })
  }

  public createForm() {
    this.amountTransfer = this.fb.group({
      amount: ['', [Validators.required, Validators.minLength(5)]]

    })
  }

  get invalidAmount() {
    return this.amountTransfer.get('amount').invalid && this.amountTransfer.get('amount').touched
  }

  public sendTransfer() {
    if (this.amountTransfer.invalid) {
      this.amountTransfer.markAllAsTouched();
    } else {
      Swal.fire(
        'Transferencia realizada con éxito',
        `Tu transferencia de ${this.amountTransfer.value.amount} a ${this.userName} se ha realizado con éxito`,
        'success'
      )
      this.amountTransfer.reset();
    }
  }

  public selectRecipient(user) {
    this.recipient = user._id;
    this.userName = user.usuario;
  }
}