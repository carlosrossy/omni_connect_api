/* eslint-disable prettier/prettier */
import { Sex } from 'App/Utils/Constants'
import { DateTime } from 'luxon'

export default interface CompleteRegistrationUserDTO {
  cpf: string
  sex: Sex | undefined
  birthDate: DateTime<boolean> | undefined
  phone: string | undefined
}
