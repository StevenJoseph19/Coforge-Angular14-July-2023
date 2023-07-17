import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
// we must 'implements OnInit' to use 'OnInit'
export class HomePageComponent implements OnInit {
  // declare an 'Observable', variable name: 'observableNumber'
  observableNumber!: Observable<number>;

  ngOnInit() {
    // create an Observable
    this.observableNumber = Observable.create(
      (observer: { next: (arg0: number) => void }) => {
        // initialize value of temp variable 'val' with 0
        let val = 0;
        const interval = setInterval(() => {
          // observer.next will announce the change made in 'val
          // by 'observableNumber'
          observer.next(val);
          // increment value of 'val' after every 1 sec
          val++;
        }, 1000);
        return () => clearInterval(interval);
      }
    );
  }
}
