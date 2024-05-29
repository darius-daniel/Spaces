import type { HttpContext } from '@adonisjs/core/http';
import User from '#models/user';
import {
  emailUpdateValidator,
  fullNameUpdateValidator,
  passwordUpdateValidator,
  registrationFormValidator,
  userNameUpdateValidator,
} from '#validators/user';

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
    await auth.authenticate();
    return inertia.render('user', { ...auth.user, password: '' }, { id: params.id });
  }

  /**
   * Edit individual record
   */
  async edit({ params, response, request }: HttpContext) {
    const { firstName, lastName, username, email, password, currentPassword } = request.body();
    const user = await User.findOrFail(params.id);

    if (firstName || lastName) {
      const data = await request.validateUsing(fullNameUpdateValidator);
      if (firstName) user.firstName = data.firstName;
      if (lastName) user.lastName = data.lastName;

      await user.save();
    } else if (username) {
      const data = await request.validateUsing(userNameUpdateValidator);

      user.username = data.username;
      await user.save();
    } else if (email && password) {
      const data = await request.validateUsing(emailUpdateValidator);
      if (password) {
        const verifiedUser = await User.verifyCredentials(user.email, data.password);

        verifiedUser.email = data.email;
        await verifiedUser.save();
      }
    } else if (password && currentPassword) {
      const data = await request.validateUsing(passwordUpdateValidator);
      if (currentPassword) {
        const verifiedUser = await User.verifyCredentials(user.email, data.currentPassword);

        verifiedUser.password = data.password;
        await verifiedUser.save();
      }
    }
    return response.accepted(true);
  }

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  // async destroy({ params }: HttpContext) {}
}
