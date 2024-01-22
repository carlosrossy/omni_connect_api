import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { Roles, Sex } from 'App/Utils/Constants'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      const sex = Object.values(Sex)
      const role = Object.values(Roles)

      table.uuid('id').primary()
      table.string('name').notNullable()
      table.string('email', 255).notNullable().unique()
      table.enum('role', role).nullable()
      table.date('birth_date').nullable()
      table.string('password', 180).notNullable()
      table.string('cpf', 11).unique().nullable()
      table.string('phone', 15).nullable()
      table.enum('sex', sex).nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
