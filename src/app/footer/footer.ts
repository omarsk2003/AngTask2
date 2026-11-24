import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
storename:string="E-Commerce ElectroShop";
storeadd:string="Amman Jordan";
email:string="ElectroShop@gmail.com";
copyright: string = '© 2026 Tech Store. All rights reserved.';

}
