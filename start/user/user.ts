/* eslint-disable prettier/prettier */
import Env from '@ioc:Adonis/Core/Env'
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/user/:userId/full-user-registration', 'UsersController.fullUserRegistration')
})
  .prefix(Env.get('PREFIX'))
  .namespace('App/Controllers/Http/User')
