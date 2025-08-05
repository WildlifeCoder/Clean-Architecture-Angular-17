import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StoreEffects } from './store.effects';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('StoreEffects', () => {
  let actions$: Observable<any> = new Observable<any>();
  let effects: StoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StoreEffects,
            provideHttpClient(),
        provideHttpClientTesting(),
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
