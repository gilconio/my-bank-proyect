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
  public customer: any;

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
      Swal.fire({
        title: `Seguro que quieres transferir ${this.amountTransfer.value.amount} a ${this.userName}? `,
        showDenyButton: true,
        confirmButtonText: `Transferir`,
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Transferencia exitosa', '', 'success')
          this.transfer();
          this.amountTransfer.reset();
        } else if (result.isDenied) {
          Swal.fire('Transferencia cancelada', '', 'info')
        }
      })
    }
  }

  public selectRecipient(user) {
    this.customer = user
    this.recipient = user._id;
    this.userName = user.nombre;
  }

  private transfer() {
    if (this.amountTransfer.value.amount) {
      const { nombre, banco, rut, tipocuenta } = this.customer;
      let customer = {
        nombre,
        rut,
        banco,
        tipocuenta,
        monto: this.amountTransfer.value.amount
      }
      this.bankService.transfer(customer).subscribe();
    }

  }
}


