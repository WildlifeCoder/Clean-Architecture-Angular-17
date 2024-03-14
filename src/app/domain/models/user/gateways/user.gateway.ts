import { Observable } from "rxjs";
import { User } from "../user.model";
import { UserDTO } from "../user.dto";

export abstract class UserGateway {
  abstract getUsers(): Observable<User[]>;
  abstract getUserById(id: number): Observable<User>;
  abstract createUser(user: UserDTO): Observable<User>;
  abstract updateUser(id: number, user: UserDTO): Observable<User>;
}
