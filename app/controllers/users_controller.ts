import type { HttpContext } from '@adonisjs/core/http';
import User from '#models/user';
import { loginFormValidator, registrationFormValidator } from '#validators/user';

export default class UsersController {
  /**
   * Display a list of resource
   */
  // async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('auth', undefined, { cssClass: 'auth' });
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    let data: { username?: string; email: string; password: string };

    if (request.url() === '/register') {
      data = await request.validateUsing(registrationFormValidator);
      try {
        const newUser = await User.create(data);
        return response.send(newUser);
      } catch (error) {
        return response.status(500);
      }
    } else {
      data = await request.validateUsing(loginFormValidator);

      try {
        let user = await User.findBy('email', data.email);
        if (user) {
          user = await User.verifyCredentials(data.email, data.password);
          return response.send(user);
        } else response.abort(`$User with email {data.email} not found`);
      } catch (error) {
        return response.status(500);
      }
    }
  }

  /**
   * Show individual record
   */
  // async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  // async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  // async destroy({ params }: HttpContext) {}
}
