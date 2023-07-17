import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductService } from './product.service';
import { FakeProductService } from './fake-product.service';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: LoggerService, useClass: LoggerService },

    { provide: 'USE_FAKE', useValue: false },

    {
      provide: ProductService,
      useFactory: (USE_FAKE: any, LoggerService: LoggerService) =>
        USE_FAKE ? new FakeProductService() : new ProductService(LoggerService),
      //useFactory: resolveProductService,
      deps: ['USE_FAKE', LoggerService],
    },
  ],
})
export class AppModule {}

export function resolveProductService(
  USE_FAKE: any,
  LoggerService: LoggerService
) {
  return USE_FAKE
    ? new FakeProductService()
    : new ProductService(LoggerService);
}
