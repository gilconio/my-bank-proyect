import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankTypesService } from 'src/app/services/bank-types.service';
import { UnsubscribeOnDestroy } from 'src/app/utils/unsubscribe-on-destroy';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css']
})
export class NewTransferComponent extends UnsubscribeOnDestroy implements OnInit {
  public form: FormGroup;
  public banks: any;
  public accountTypes: any;

  constructor(private fb: FormBuilder, private bankTypesService: BankTypesService) { 
    super();
  }

  ngOnInit(): void {
    this.getBankTypes();
    this.createForm();
    this.getAccountType();
  }

  public createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      phone: ['', [Validators.required, Validators.minLength(3)]],
      rut: ['', [Validators.required, Validators.minLength(5)]],
      accountNumber: ['', Validators.required],
      bankType: ['', Validators.required],
      accountType: ['', Validators.required]

    })
  }

  get invalidName() {
    return this.form.get('name').invalid && this.form.get('name').touched
  }
  get invalidRut() {
    return this.form.get('rut').invalid && this.form.get('rut').touched
  }

  get invalidEmail() {
    return this.form.get('email').invalid && this.form.get('email').touched
  }

  get invalidPhone() {
    return this.form.get('phone').invalid && this.form.get('phone').touched
  }

  get invalidAccountNumber() {
    return this.form.get('accountNumber').invalid && this.form.get('accountNumber').touched
  }
  get invalidBank() {
    return this.form.get('bankType').invalid && this.form.get('bankType').touched
  }

  get invalidAccountType() {
    return this.form.get('accountType').invalid && this.form.get('accountType').touched
  }

  public save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      Swal.fire(
        'Destinatario creado',
        `Se ha creado el destinatario ${this.form.value.name}`,
        'success'
      )
      this.form.reset();

    }

  }

  private getBankTypes() {
    this.bankTypesService.getBankTypes().subscribe(data => {
      this.banks = data.banks;

    })
  }

  private getAccountType() {
    this.bankTypesService.getAccountType().subscribe(data => {
      this.accountTypes = data;
    })
  }

}
