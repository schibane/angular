import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { Product } from '../Models/product';
import { DropdownModule } from 'primeng/dropdown';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CardModule, InputNumberModule, FormsModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {};

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.product$.subscribe((p) => (this.product = p));
  }
}
