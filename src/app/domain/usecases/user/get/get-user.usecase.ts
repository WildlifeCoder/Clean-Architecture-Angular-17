import { Injectable } from "@angular/core";
import { UserGateway } from "@app/domain/models/user/gateways/user.gateway";




@Injectable({
  providedIn: 'root'
})

export class GetUserUsecase {
  constructor(private readonly _userGateway: UserGateway) {}

  getAll() {
    return this._userGateway.getUsers()
  }
  getOne(id: number) {
    return this._userGateway.getUserById(id)
  }
}
