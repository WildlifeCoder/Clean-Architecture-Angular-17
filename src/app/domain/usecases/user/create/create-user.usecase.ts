import { UserGateway } from "@app/domain/models/user/gateways/user.gateway";
import { UserDTO } from "@app/domain/models/user/user.dto";


export class CreateUserUsecase {
  constructor(private readonly _userGateway: UserGateway) {}

  create(user: UserDTO) {
    return this._userGateway.createUser(user)
  }
}
