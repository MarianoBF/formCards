import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      surname: new FormControl(),
      password: new FormControl(),
      age: new FormControl('', [this.ageValidator]),
      email: new FormControl('', [Validators.pattern(/@/)]),
      team: new FormControl(),
      image: new FormControl("",),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.formulario.value);
  }

  ageValidator(formControl: any): any {
    console.log(formControl.value);
    const max = 90;
    const min = 18;
    const value = formControl.value;
    if (value > 18 && value < 90) {
      return null;
    } else {
      return { edadvalidator: { max, min } };
    }
  }
  
}
