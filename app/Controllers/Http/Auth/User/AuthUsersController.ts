import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { inject } from '@adonisjs/core/build/standalone'
import UserRepository from 'App/Repositories/User/UserRepository'
import { Roles } from 'App/Utils/Constants'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import LoginValidator from 'App/Validators/LoginValidator'

@inject()
export default class AuthUsersController {
  constructor(private readonly userRepository: UserRepository) {}

  public async signin({ request, auth, response }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator)
    const token = await auth.attempt(email, password)
    return response.ok({ token })
  }

  public async signup({ request, auth, response }: HttpContextContract) {
    const userDto = await request.validate(CreateUserValidator)

    const user = await this.userRepository.create({
      role: Roles.USER,
      ...userDto,
    })
    const token = await auth.use('api').generate(user)
    return response.created({ token })
  }
}
