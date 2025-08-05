import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserGateway } from '@app/domain/models/user/gateways/user.gateway';
import { User } from '@app/domain/models/user/user.model';
import { GetUserUsecase } from '@app/domain/usecases/get-user.usecase';
import { UserAdapterService } from '@app/infrastructure/driven-adapters/user-adapter/user-adapter.service';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-users',
    imports: [CommonModule],
    providers: [],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]> = of([]);

  constructor(private getUserUsecase: GetUserUsecase) { }
  ngOnInit(): void {
    this.getUsers();

  }

  getUsers() {
    this.users$ = this.getUserUsecase.getAll();
  }

}
