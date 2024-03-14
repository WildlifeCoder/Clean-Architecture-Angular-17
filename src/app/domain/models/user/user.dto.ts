import { User } from "./user.model";

export interface UserDTO extends Omit<User, 'id'> {}
