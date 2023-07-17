import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [],
})
export class AppComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  getProducts() {
    this.products = this.productService.getProducts();
  }
}
