import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserGateway } from '@domain/models/user/gateways/user.gateway';
import { UserDTO } from '@domain/models/user/user.dto';
import { User } from '@domain/models/user/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserAdapterService extends UserGateway {
  private readonly _baseUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private readonly _http: HttpClient) {
    super();
  }

  getUserById(id: number): Observable<User> {
    throw new Error('Method not implemented.');
  }
  createUser(user: UserDTO): Observable<User> {
    throw new Error('Method not implemented.');
  }
  updateUser(id: number, user: UserDTO): Observable<User> {
    throw new Error('Method not implemented.');
  }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this._baseUrl);
  }
}
