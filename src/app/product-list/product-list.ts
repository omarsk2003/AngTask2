import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
products = [
    {
      name: 'Laptop',
      description: 'A high-performance laptop for work and play.',
      price: 700,
      available:true,
      imageurl:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zMV9waG90b19vZl9hX2xhcHRvcF9tb2NrdXBfY2xvc2UtdXBfbWluaW1hbF9pc182M2Q2NzViOS00YjlhLTQ3OWEtOGMyMS1hYWQwMjViNWYzZDIucG5n.png"    
    },
    {
      name: 'Mouse',
      description: 'A wireless mouse with ergonomic design.',
      price: 20,
      available:true,
      imageurl:"https://img.magnific.com/free-psd/black-wired-computer-mouse-transparent-background_84443-65260.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      name: 'Keyboard',
      description: 'A mechanical keyboard with customizable RGB lighting.',
      price: 110,
      available:true,
     imageurl:"https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-vibrant-rgb-keyboard-design-png-image_14699987.png"
    },
     {
      name: 'TV',
      description: 'Smart Google Tv.',
      price: 250,
      available:false,
      Imageurl:"https://png.pngtree.com/png-vector/20240821/ourmid/pngtree-smart-android-tv-png-image_13218874.png"
    }
  ];
buyProduct(productName: string): void {
    alert(productName + ' purchased successfully!');
  }


}
