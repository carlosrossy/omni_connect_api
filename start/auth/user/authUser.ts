/* eslint-disable prettier/prettier */
import Env from '@ioc:Adonis/Core/Env'
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/auth/signin', 'AuthUsersController.signin')
  Route.post('/auth/signup', 'AuthUsersController.signup')
})
  .prefix(Env.get('PREFIX'))
  .namespace('App/Controllers/Http/Auth/User')
