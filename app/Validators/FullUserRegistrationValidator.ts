/* eslint-disable prettier/prettier */
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'
import { Sex } from 'App/Utils/Constants'

export default class FullUserRegistrationValidator {
  constructor(protected ctx: HttpContextContract) {}

  private sex = Object.values(Sex)

  public schema = schema.create({
    cpf: schema.string({}, [
      rules.unique({ table: 'users', column: 'cpf' }),
      rules.minLength(11),
      rules.maxLength(11),
    ]),
    sex: schema.enum.optional(this.sex),
    birthDate: schema.date.optional({ format: 'yyyy-MM-dd' }),
    phone: schema.string.optional({}, [rules.unique({ table: 'users', column: 'phone' })]),
  })

  public messages: CustomMessages = {
    'cpf.unique': 'Já existe um usuário com este CPF',
    'phone.unique': 'Já existe um usuário com este telefone',
    'cpf.minLength': 'O CPF deve ter no mínimo {{ options.minLength }} caracteres',
    'cpf.maxLength': 'O CPF deve ter no máximo {{ options.maxLength }} caracteres',
  }
}
