import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ProductListComponent, ProductDetailsComponent],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.css',
})
export class StandaloneComponent {
  title = 'StandaloneComponent';
}
