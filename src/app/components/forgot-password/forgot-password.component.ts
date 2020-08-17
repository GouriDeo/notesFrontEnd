import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpRequestService} from '../../services/user.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpasswordForm: FormGroup;
  constructor(private fb:FormBuilder, private service:HttpRequestService) { }

  ngOnInit(): void {
    this.forgotpasswordForm = this.fb.group({
      email: ['', Validators.required] 
    })
  }

  get email(){
    return this.forgotpasswordForm.get('email');
  }

  forgotpassword(){
    this.service.forgotpassword(this.forgotpasswordForm.value).subscribe(res => {
      console.log(res)
    })
  }

}
