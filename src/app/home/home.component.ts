import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'arekr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  wllControl = new FormControl('', [Validators.required]);
  l1Control = new FormControl('', [Validators.required]);
  aufControl = new FormControl('');

  sztControl = new FormControl('');

  niciControl = new FormControl('');
  czasControl = new FormControl('');
  // l1Control = new FormControl('');

  wllList = [
    { name: '1', color: 'purple' },
    { name: '2', color: 'green' },
    { name: '3', color: 'yellow' },
    { name: '4', color: 'gray' },
    { name: '5', color: 'red' },
    { name: '6', color: 'brown' },
    { name: '8', color: 'blue' },
    { name: '10', color: 'orange' },
    { name: '12', color: 'orange' },
    { name: '15', color: 'orange' },
    { name: '20', color: 'orange' },
    { name: '25', color: 'orange' },
    { name: '30', color: 'orange' },
    { name: '40', color: 'orange' }
  ];
  constructor(fb: FormBuilder) {}

  ngOnInit() {}
  zapisz() {
    console.log('zapisz');
    setTimeout(() => {
      alert(
        `Wll: ${this.wllControl.value.name}, l1: ${
          this.l1Control.value
        }, auf: ${this.aufControl.value}, nici: ${
          this.niciControl.value
        }, szt: ${this.sztControl.value}, czas: ${this.czasControl.value}.`
      );
    }, 500);
  }
}
