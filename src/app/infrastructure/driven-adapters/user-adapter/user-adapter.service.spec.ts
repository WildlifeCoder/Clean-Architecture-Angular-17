import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { UserAdapterService } from './user-adapter.service';

describe('UserAdapterService', () => {
  let service: UserAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(UserAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
