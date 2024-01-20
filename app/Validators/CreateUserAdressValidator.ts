/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, schema } from '@ioc:Adonis/Core/Validator'

export default class CreateUserAdressValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    postalCode: schema.string(),
    adress: schema.string(),
    adressNumber: schema.string(),
    complement: schema.string.optional(),
    neighborhood: schema.string(),
    uf: schema.string(),
    city: schema.string(),
  })

  public messages: CustomMessages = {
    'email.unique': 'Já existe um usuário com este email',
  }
}
