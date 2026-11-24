import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
Selectedpage="Home";
changePage(pageName: string): void {
    this.Selectedpage = pageName;
  }


}
