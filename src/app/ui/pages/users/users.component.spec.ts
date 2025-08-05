import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UsersComponent } from './users.component';
import { GetUserUsecase } from '../../../domain/usecases/user/get/get-user.usecase';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let getUserUsecaseMock: jasmine.SpyObj<GetUserUsecase>;

  beforeEach(async () => {

    getUserUsecaseMock = jasmine.createSpyObj('GetUserUsecase', {
      getAll: of([]),
    });
    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: GetUserUsecase, useValue: getUserUsecaseMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
