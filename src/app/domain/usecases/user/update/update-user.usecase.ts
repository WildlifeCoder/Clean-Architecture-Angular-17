import { UserGateway } from "../models/user/gateways/user.gateway";
import { UserDTO } from "../models/user/user.dto";

export class UpdateUserUsecase {
  constructor(private userGateway: UserGateway) {}

  update(id: number, user: UserDTO) {
    return this.userGateway.updateUser(id, user)
  }
}
