import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpRequestService} from '../../services/note.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']

})
export class DashBoardComponent implements OnInit {
  
  showMenu : Boolean = false;
  changegrid : Boolean = false;
  constructor(private fb:FormBuilder, private service:HttpRequestService, private router:Router,) {
    let token = localStorage.getItem('loginToken')
    let decodedUserDetails = jwt_decode(token)
    console.log(decodedUserDetails)
   }

  ngOnInit(): void {
  }
  
  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

  grid(){
    this.changegrid = !this.changegrid;
  }
}
