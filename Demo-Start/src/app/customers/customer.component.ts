import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup
  customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: { value: 'n/a', disabled: true },
      email: '',
      sendCatalog: true
    });

    /*this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true)
    });*/
  }

  populateTestData(): void {
    // this.customerForm.setValue({
    //   firstName: 'Bob',
    //   lastName: 'Jack',
    //   email: 'aa@dd.com',
    //   sendCatalog: false
    // });

    this.customerForm.patchValue({
      firstName: 'Bob',
      lastName: 'Jack',
      sendCatalog: false
    });
  }


  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
