import { UserGateway } from '@app/domain/models/user/gateways/user.gateway';
import { UserDTO } from '@app/domain/models/user/user.dto';

export class UpdateUserUsecase {
  constructor(private readonly _userGateway: UserGateway) {}

  update(id: number, user: UserDTO) {
    return this._userGateway.updateUser(id, user);
  }
}
