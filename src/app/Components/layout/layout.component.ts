import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isList: number | undefined;
  isMenu: boolean = false;
  isSearch: boolean = false;
  showProfileMenu:boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  showMenuOptions(){
    this.showProfileMenu = !this.showProfileMenu;
  }

}
