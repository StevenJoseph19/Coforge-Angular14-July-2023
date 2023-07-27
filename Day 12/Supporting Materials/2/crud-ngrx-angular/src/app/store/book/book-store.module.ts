import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BookEffects } from './book.effects';
import { bookReducer } from './book.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('book', bookReducer),
        EffectsModule.forFeature([BookEffects])
    ]
})
export class BookStoreModule {}
