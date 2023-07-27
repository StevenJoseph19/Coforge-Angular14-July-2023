import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import the GridModule for the Grid component
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { VirtualScrollService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  //declaration of ej2-angular-grids module into NgModule
  imports: [BrowserModule, GridModule],
  providers: [VirtualScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
