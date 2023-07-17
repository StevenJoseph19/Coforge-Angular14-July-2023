import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Product } from './product';

@Injectable()
export class ProductService {
  constructor(private loggerService: LoggerService) {
    console.log('Product Service Created');
  }

  public getProducts() {
    this.loggerService.log('getProducts called');
    let products: Product[];

    products = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pen Drive', 750),
      new Product(3, 'Power Bank', 100),
    ];

    this.loggerService.log(products);
    return products;
  }
}
