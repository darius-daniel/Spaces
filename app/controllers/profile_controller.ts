import {
  fullNameUpdateValidator,
  userNameUpdateValidator,
  passwordUpdateValidator,
  emailUpdateValidator,
} from '#validators/user';
import User from '#models/user';
import type { HttpContext } from '@adonisjs/core/http';

export default class ProfileController {
  async show({ auth, inertia, params }: HttpContext) {
    if (auth.isAuthenticated === false) {
      await auth.authenticate();
    }
    if (auth.user) {
      auth.user.$setAttribute('password', '');
    }
    return inertia.render(
      'user_update',
      { user: { ...auth.user?.$attributes } },
      { id: params.id }
    );
  }

  async update({ params, request, response }: HttpContext) {
    const { firstName, lastName, username, email, password } = request.body();
    let user = await User.findOrFail(params.id);

    if (firstName || lastName) {
      const data = await request.validateUsing(fullNameUpdateValidator);

      user.firstName = data.firstName;
      user.lastName = data.lastName;
    } else if (username) {
      const data = await request.validateUsing(userNameUpdateValidator);

      user.username = data.username;
    } else if (email) {
      const data = await request.validateUsing(emailUpdateValidator);

      user = await User.verifyCredentials(user.email, data.password);
      user.email = data.email;
    } else if (password) {
      const data = await request.validateUsing(passwordUpdateValidator);

      user = await User.verifyCredentials(user.email, data.currentPassword);
      user.password = data.password;
    }

    await user.save();
    return response.send('<p> Success! </p>');
  }
}
