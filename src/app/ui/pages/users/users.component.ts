import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { User } from '@domain/models/user/user.model';
import { GetUserUsecase } from '@domain/usecases/user/get/get-user.usecase';
import { finalize, Observable, of } from 'rxjs';
import { UserGateway } from '@domain/models/user/gateways/user.gateway';
import { UserAdapterService } from '@infrastructure/driven-adapters/user-adapter/user-adapter.service';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  providers: [
    GetUserUsecase,
    {
      provide: UserGateway,
      useClass: UserAdapterService,
    },
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  $isLoading: WritableSignal<boolean> = signal(false);
  users$: Observable<User[]> = of([]);

  constructor(private readonly _getUserUsecase: GetUserUsecase) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.$isLoading.set(true);
    this.users$ = this._getUserUsecase
      .getAll()
      .pipe(finalize(() => this.$isLoading.set(false)));
  }

  userTrackByFn(index: number, user: User) {
    return user.id;
  }
}
