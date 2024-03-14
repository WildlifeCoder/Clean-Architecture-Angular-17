import { UserGateway } from "../models/user/gateways/user.gateway";
import { UserDTO } from "../models/user/user.dto";

export class CreateUserUsecase {
  constructor(private userGateway: UserGateway) {}

  create(user: UserDTO) {
    return this.userGateway.createUser(user)
  }
}
