import type { HttpContext } from '@adonisjs/core/http';
import User from '#models/user';
import { loginFormValidator } from '#validators/user';

export default class SessionController {
  async create({ inertia }: HttpContext) {
    return inertia.render('auth', undefined, { cssClass: 'auth' });
  }

  async store({ auth, request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginFormValidator);
    const user = await User.verifyCredentials(email, password);

    await auth.use('web').login(user);
    return response.redirect(`/user/${user.id}`);
  }

  async destroy({ auth, response }: HttpContext) {
    await auth.use('web').logout();
    return response.redirect('/login');
  }
}
