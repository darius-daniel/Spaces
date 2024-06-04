import type { HttpContext } from '@adonisjs/core/http';
import User from '#models/user';
import { registrationFormValidator } from '#validators/user';

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
  async store({ request, response, inertia }: HttpContext) {
    let data: { username?: string; email: string; password: string };

    data = await request.validateUsing(registrationFormValidator);
    try {
      const newUser = await User.create(data);
      return response.redirect(`/user/${newUser.id}`);
    } catch (error) {
      console.error(error.message);
      return inertia.render('errors/server_error', { error });
    }
  }

  /**
   * Show individual record
   */
  async show({ auth, params, inertia }: HttpContext) {
    if (auth.isAuthenticated === false) {
      await auth.authenticate();
    }

    if (auth.user) {
      auth.user.$setAttribute('password', '');
    }

    return inertia.render('user', { user: { ...auth.user?.$attributes } }, { id: params.id });
  }

  /**
   * Edit individual record
   */
  // async edit({ params, response, request }: HttpContext) { }
  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  // async destroy({ params }: HttpContext) {}
}
