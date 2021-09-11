import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isList: number | undefined;
  isMenu: boolean = false;
  isSearch: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
