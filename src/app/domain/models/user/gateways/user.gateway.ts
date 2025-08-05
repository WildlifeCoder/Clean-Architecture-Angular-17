import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../user.model";
import { UserDTO } from "../user.dto";




@Injectable({
  providedIn: 'root'
})
export abstract class UserGateway {
  abstract getUsers(): Observable<User[]>;
  abstract getUserById(id: number): Observable<User>;
  abstract createUser(user: UserDTO): Observable<User>;
  abstract updateUser(id: number, user: UserDTO): Observable<User>;
}
