import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../confirmed.validator';
@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
  registerForm: FormGroup;
  showPassword = false;
  submitted = false;
  codes:any=['91','92','00'];
  gender:any=['Male','Female'];
  constructor(private formBuilder: FormBuilder) {     
    this.registerForm = this.formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      showPasswordcheckbox:[Boolean],
      countrycode:[''],
      phoneNumber:['',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      gender:[''],
      hobbies:[''],
      city:[''],
      agreecheckbox:[false,Validators.requiredTrue],
  },{ validator: ConfirmedValidator('password', 'confirmPassword')
  });

  this.registerForm.patchValue({ showPasswordcheckbox: false });
  }
  ngOnInit() {
  }

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }


onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
toggleShowPassword() { 
  debugger
  if(!this.registerForm.value.showPasswordcheckbox){
    this.showPassword = true
  }else{
    this.showPassword = false;
  }
  
}
//   ngOnInit(): void {
//   }
// submitForm(){
//   console.log("form",this.employeeForm.value);
// }
}
