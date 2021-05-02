import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css']
})
export class NewTransferComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
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

  save() {
    if (this.form.invalid) {
      console.log(this.form);
      
      this.form.markAllAsTouched();
    } else {
      this.form.reset();

    }

  }

}
