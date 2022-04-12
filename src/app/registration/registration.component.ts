import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submitted(submitted: any) {
    throw new Error('Method not implemented.');
  }

  formGroup = new FormGroup(
    {
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'name': new FormControl(null, Validators.required),
      'bio': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, this.checkPassword])
    }
  );

  constructor(private formBuilder: FormBuilder,
    private http: UserServiceService, private router: Router) { }

  ngOnInit() {

  }
  onSubmit(value: any) {
    this.http.register("https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d").subscribe(res => {
      if (res) {
        localStorage.setItem("user", JSON.stringify(value))
        this.router.navigate(['/profile']);
      }
    })
  }
  checkPassword(control: any) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }
}
