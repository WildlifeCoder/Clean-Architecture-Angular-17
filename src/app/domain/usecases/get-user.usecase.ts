import { Injectable } from "@angular/core";
import { UserGateway } from "../models/user/gateways/user.gateway";

@Injectable({
  providedIn: 'root'
})

export class GetUserUsecase {
  constructor(private userGateway: UserGateway) {}

  getAll() {
    return this.userGateway.getUsers()
  }
  getOne(id: number) {
    return this.userGateway.getUserById(id)
  }
}
