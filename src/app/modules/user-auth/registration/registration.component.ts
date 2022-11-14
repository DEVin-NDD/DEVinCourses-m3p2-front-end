import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'pro-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  title='project'
  confirmPassword: any = true;
  formRegistration = new FormGroup(
    {
      nameInput:new FormControl(""),
      emailInput:new FormControl(""),
      ageInput:new FormControl(""),
      cpfInput:new FormControl(""),
      passowerInput: new FormControl("")
    }
  );
  submitted = false;
  ngOnInit(): void {
    this.formRegistration = this.formBuilder.group(
      {
        nameInput: ['', [Validators.required, Validators.minLength(3),this.checkNumbers]],
        emailInput: ['',[Validators.required, Validators.email]],
        ageInput: ['',[Validators.required, Validators.min(18), Validators.max(110)]],
        cpfInput: ['',[Validators.required, this.checkCPF]],
        passwordInput: ['',[Validators.required, Validators.minLength(8)]],
        confirmInput: ['',[Validators.required]]
      },
      {
        validators: [this.checkMatch('passwordInput', 'confirmInput')],
      }
    )
  }
  checkMatch(controlName: string, checkControlName: string): ValidatorFn {
    console.log('zero')

    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }

      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
  get f(): { [key: string]: AbstractControl } {
    return this.formRegistration.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.formRegistration.invalid) {
      return;
    }

    console.log(JSON.stringify(this.formRegistration.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.formRegistration.reset();
  }
  checkNumbers(dataForm: FormControl) {
    const inputValue = dataForm.value;
    const regex = /[0-9]/;
    if (inputValue && inputValue!='') {
      return regex.test(inputValue) ? {checkInvalid: true, actual: inputValue} : null;
    }
    return null;
  }
  checkPassword(dataForm: FormControl) {
    const inputPassword = dataForm.get('passwordInput');
    const inputConfirm = dataForm.get('confirmInput');
    if (inputPassword !== inputConfirm) {
      return {checkInvalid: true, actual: inputConfirm};
    }
    return null;
  }
  checkCPF(dataForm: FormControl) {
    var Sum;
    var Remainder;
    Sum = 0;
    let stringCPF = dataForm.value;

    if (stringCPF == "00000000000") return { cpfInvalido: true, atual: stringCPF };

    for (let i=1; i<=9; i++) Sum = Sum + parseInt(stringCPF.substring(i-1, i)) * (11 - i);
    Remainder = (Sum * 10) % 11;

      if ((Remainder == 10) || (Remainder == 11))  Remainder = 0;
      if (Remainder != parseInt(stringCPF.substring(9, 10)) ) return { cpfInvalid: true, actual: stringCPF };

    Sum = 0;
      for (let i = 1; i <= 10; i++) Sum = Sum + parseInt(stringCPF.substring(i-1, i)) * (12 - i);
      Remainder = (Sum * 10) % 11;

      if ((Remainder == 10) || (Remainder == 11))  Remainder = 0;
      if (Remainder != parseInt(stringCPF.substring(10, 11) ) ) return { cpfInvald: true, actual: stringCPF };
      return null;
  }
}