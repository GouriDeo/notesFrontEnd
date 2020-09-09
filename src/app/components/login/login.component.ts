import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpRequestService} from '../../services/user.service'
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider,GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup;
res 
user: SocialUser;
loggedIn: boolean;

  constructor(private fb:FormBuilder, private service:HttpRequestService, private router:Router, private authService: SocialAuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user)
    });

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  login(){
    this.service.login(this.loginForm.value).subscribe(res => {
      this.res=res
      localStorage.setItem('loginToken',this.res.token)
      this.router.navigate(['dashboard'])
    })
  }
}


