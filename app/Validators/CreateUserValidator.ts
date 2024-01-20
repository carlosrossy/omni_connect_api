import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string({}, [
      rules.confirmed('passwordConfirmation'),
      rules.minLength(6),
      rules.maxLength(32),
    ]),
  })

  public messages: CustomMessages = {
    'email.unique': 'Já existe um usuário com este email',
    'confirmed': 'As senhas devem ser iguais',
    'password.minLength': 'A senha deve ter no mínimo {{ options.minLength }} caracteres',
    'password.maxLength': 'A senha deve ter no máximo {{ options.maxLength }} caracteres',
  }
}
