import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  error: string = ``;
  success: string = ``;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  submitLoginForm(loginFormParam: FormGroup) {
    this._AuthService.login(loginFormParam.value).subscribe((res) => {
      if (res.msg == 'success') {
        localStorage.setItem(`userToken`, res.token);
        this._AuthService.saveCurrentUser();
        this._Router.navigate(['/outbreaks']);
      }
    });
  }

  ngOnInit(): void {}
}
