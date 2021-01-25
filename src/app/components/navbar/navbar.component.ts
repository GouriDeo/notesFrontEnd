import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    {
      let token = localStorage.getItem('loginToken')
      let decodedUserDetails = jwt_decode(token)
      console.log(decodedUserDetails)
     }
  
  }

  ngOnInit(): void {
  }

}
