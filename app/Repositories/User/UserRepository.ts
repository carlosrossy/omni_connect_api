/* eslint-disable prettier/prettier */

import AdressDto from 'App/Dtos/AdressDto'
import CompleteRegistrationUserDTO from 'App/Dtos/CompleteRegistrationUserDTO'
import UserDTO from 'App/Dtos/UserDTO'
import User from 'App/Models/User'

export default class UserRepository {
  public async create(user: UserDTO): Promise<User> {
    return await User.create(user)
  }

  public async completeRegistration(
    userId: string,
    partialUser: Partial<CompleteRegistrationUserDTO>,
    partialAdress: Partial<AdressDto>
  ): Promise<User> {
    const user = await User.findOrFail(userId)
    user.merge(partialUser)
    await user.related('adress').create(partialAdress)
    await user.save()
    return user
  }
}
