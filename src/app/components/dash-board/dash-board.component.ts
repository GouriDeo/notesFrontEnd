import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor() {
    let token = localStorage.getItem('loginToken')
    let decodedUserDetails = jwt_decode(token)
    console.log(decodedUserDetails)
   }

  ngOnInit(): void {
  }

}
