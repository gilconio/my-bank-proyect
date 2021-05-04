import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankTypesService } from 'src/app/services/bank-types.service';
import { UnsubscribeOnDestroy } from 'src/app/utils/unsubscribe-on-destroy';
import Swal from 'sweetalert2';
import { validateRut } from 'src/app/utils/rut';
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
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      telefono: ['', [Validators.required, Validators.minLength(5)]],
      rut: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^\d{6,8}[-][0-9kK]{1}$/)]],
      ncuenta: ['', Validators.required],
      banco: ['', Validators.required],
      tipocuenta: ['', Validators.required]

    })
  }

  get invalidName() {
    return this.form.get('nombre').invalid && this.form.get('nombre').touched
  }
  get invalidRut() {
    return this.form.get('rut').invalid && this.form.get('rut').touched
  }

  get invalidEmail() {
    return this.form.get('correo').invalid && this.form.get('correo').touched
  }

  get invalidPhone() {
    return this.form.get('telefono').invalid && this.form.get('telefono').touched
  }

  get invalidAccountNumber() {
    return this.form.get('ncuenta').invalid && this.form.get('ncuenta').touched
  }
  get invalidBank() {
    return this.form.get('banco').invalid && this.form.get('banco').touched
  }

  get invalidAccountType() {
    return this.form.get('tipocuenta').invalid && this.form.get('tipocuenta').touched
  }

  public save() {
    if (this.form.invalid) {
      console.log(this.form);
      
      this.form.markAllAsTouched();
    } else {
      Swal.fire(
        'Destinatario creado',
        `Se ha creado el destinatario ${this.form.value.nombre}`,
        'success'
      )
      this.bankTypesService.addCustomers(this.form.value).subscribe();
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
