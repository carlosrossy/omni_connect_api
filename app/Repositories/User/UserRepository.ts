/* eslint-disable prettier/prettier */

import UserDTO from 'App/Dtos/UserDTO'
import User from 'App/Models/User'

export default class UserRepository {
  public async create(user: UserDTO): Promise<User> {
    return await User.create(user)
  }
}
