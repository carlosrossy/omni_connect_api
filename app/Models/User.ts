/* eslint-disable prettier/prettier */
import { DateTime } from 'luxon'
import { beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import UuidBase from './Base/UuidBase'
import { Roles, Sex } from 'App/Utils/Constants'
import Hash from "@ioc:Adonis/Core/Hash";

export default class User extends UuidBase {
  @column()
  public name: string

  @column()
  public email: string

  @column()
  public cpf: string

  @column()
  public phone: string

  @column()
  public sex: Sex

  @column()
  public role: Roles

  @column()
  public birthDate: DateTime

  @column({ serializeAs: null })
  public password: string
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
