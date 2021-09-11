import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  showLoginModal:boolean = false;
  showRegisterModal:boolean = false;

  ngOnInit(): void {

  }

  toggleLoginModal(){
    this.showLoginModal = !this.showLoginModal;
  }

  toggleRegisterModal(){
    this.showRegisterModal = !this.showRegisterModal;
  }

  showHomePage(){
    
  }

}
