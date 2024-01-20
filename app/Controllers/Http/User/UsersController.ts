import { inject } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserRepository from 'App/Repositories/User/UserRepository'
import CreateUserAdressValidator from 'App/Validators/CreateUserAdressValidator'
import FullUserRegistrationValidator from 'App/Validators/FullUserRegistrationValidator'

@inject()
export default class UsersController {
  constructor(private readonly userRepository: UserRepository) {}

  public async userLogged({ auth, response }: HttpContextContract) {
    const userLogged = await auth.authenticate()
    return response.ok(userLogged)
  }

  public async fullUserRegistration({ params, auth, request, response }: HttpContextContract) {
    await auth.authenticate()
    const { userId } = params
    const userDto = await request.validate(FullUserRegistrationValidator)
    const adressDto = await request.validate(CreateUserAdressValidator)

    await this.userRepository.completeRegistration(userId, userDto, adressDto)

    return response.noContent()
  }
}
