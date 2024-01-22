/* eslint-disable prettier/prettier */
import { Roles } from 'App/Utils/Constants'

export default interface UserDTO {
  name: string
  email: string
  role: Roles
  password: string
}
