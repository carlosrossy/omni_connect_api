/* eslint-disable prettier/prettier */
import { Roles } from 'App/Utils/constants'

export default interface UserDTO {
  name: string
  email: string
  role: Roles
  password: string
}
