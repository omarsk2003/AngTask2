import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
productName="Laptop";
productDesc="A high-performance laptop for work and play.";
productpri=300;
productimg="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zMV9waG90b19vZl9hX2xhcHRvcF9tb2NrdXBfY2xvc2UtdXBfbWluaW1hbF9pc182M2Q2NzViOS00YjlhLTQ3OWEtOGMyMS1hYWQwMjViNWYzZDIucG5n.png";
productquantity=50;
isava=true;
dis="10%";

}
