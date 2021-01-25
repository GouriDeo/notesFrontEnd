import { APP_ID, Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpRequestService} from '../../services/note.service'
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { __importDefault } from 'tslib';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  noteForm: FormGroup;
  constructor(private fb:FormBuilder, private service:HttpRequestService, private router:Router) {
    let token = localStorage.getItem('loginToken')
    let decodedUserDetails = jwt_decode(token)
    console.log(decodedUserDetails)
    let userid = decodedUserDetails._id;
    console.log(userid)
  }

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })

  }

  get title(){
    return this.noteForm.get('title');
  }
  get content(){
    return this.noteForm.get('content');
  }

  addNote(){
    let userDetail = {
      title: this.noteForm.value.title,
      content: this.noteForm.value.content,
      userId: jwt_decode(localStorage.getItem('loginToken'))._id    
    }
    this.service.add(
      userDetail
    ).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
      alert(err.error.msg);
    });
  }
}
