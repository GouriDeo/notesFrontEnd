import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
  @Input() showMenu;
  
  constructor() { }

  ngOnInit(): void {
  }

  
 
}
