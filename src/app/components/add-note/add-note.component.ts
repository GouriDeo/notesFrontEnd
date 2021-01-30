import {Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpRequestService} from '../../services/note.service'
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  noteForm: FormGroup;
  @Input() showMenu;
  constructor(private fb:FormBuilder, private service:HttpRequestService, private router:Router) {

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
