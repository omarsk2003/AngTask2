import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

storename:string="E-Commerce ElectroShop";

msg1(){alert("Welcome to the Electro Shop");
}
msg2(){
alert("Every thing you need in one place");
}
}
