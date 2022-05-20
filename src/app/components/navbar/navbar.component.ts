import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hamburger: boolean = false;
  counter: number = 0;
  indicator: number = 0;
  router : string = '';
  route = false;

  constructor() { }

  ngOnInit(): void {
  }

  hamburgerMenu() {
    if (this.hamburger == true) {
      this.hamburger = false;
    }
    else {
      this.hamburger = true;
    }
  }
  
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    this.counter = (winScroll / height) * 2000;
    this.indicator = this.counter;
  }
  
  mercatiUrl() {
    this.route = true;
  }
  
  changeUrl() {
    this.route = false;
  }
}
