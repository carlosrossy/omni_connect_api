import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import UuidBase from './Base/UuidBase'

export default class Adress extends UuidBase {
  @column()
  public userId: string

  @column()
  public postalCode: string

  @column()
  public adress: string

  @column()
  public adressNumber: string

  @column()
  public complement: string

  @column()
  public neighborhood: string

  @column()
  public uf: string

  @column()
  public city: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
