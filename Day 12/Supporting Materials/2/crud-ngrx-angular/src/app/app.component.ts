import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './interfaces/book.interface';
import { select, Store } from '@ngrx/store';
import * as fromBooks from './store/book/index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    books$: Observable<IBook[]>;
    isLoading$: Observable<boolean>;

    constructor(private readonly store: Store) {
    }

    ngOnInit(): void {
        this.initDispatch();
        this.initSubscriptions();
    }

    onCreateBook(name: string): void {
        console.log(name);
        if (!name) {
            return;
        }

        this.store.dispatch(fromBooks.createBook({
            book: {
                id: Math.random(),
                name,
            }
        }));
    }

    onUpdateBook(book: IBook): void {
        this.store.dispatch(fromBooks.updateBook({book}));
    }

    onDeleteBook(book: IBook): void {
        this.store.dispatch(fromBooks.deleteBook({book}));
    }

    private initDispatch(): void {
        this.store.dispatch(fromBooks.getBooks());
    }

    private initSubscriptions(): void {
        this.books$ = this.store.pipe(select(fromBooks.selectBooksList));
        this.isLoading$ = this.store.pipe(select(fromBooks.selectBookIsLoading));
    }
}
