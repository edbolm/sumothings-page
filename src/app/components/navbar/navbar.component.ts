import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent{
    isOpen = false;
    openSideBar() {
    this.isOpen = this.isOpen ? false : true;
    }
}
