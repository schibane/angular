import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Product } from '../Models/product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [TableModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  subscriptions: Subscription[] = [];
  pdtSubscription: Subscription = new Subscription();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(category?: string) {
    this.pdtSubscription = this.productService
      .getProducts(category || '')
      .subscribe((response) => {
        this.products = response;
        this.productService.product$.next(this.products[0]);
      });
    this.subscriptions.push(this.pdtSubscription);
  }

  handleSelect(rowData: any): void {
    console.log('*************', rowData);
    this.productService.product$.next(rowData);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
