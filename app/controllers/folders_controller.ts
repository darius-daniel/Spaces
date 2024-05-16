import Folder from '#models/folder';
import User from '#models/user';
import { createFolderValidator } from '#validators/folder';
import type { HttpContext } from '@adonisjs/core/http';

export default class FoldersController {
  /**
   * Display a list of resource
   */
  async index({ params, response }: HttpContext) {
    try {
      return await Folder.findManyBy(params);
    } catch (error) {
      return response.status(404).send(error);
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const { name, userId } = await request.validateUsing(createFolderValidator);

    try {
      const user = await User.findOrFail(userId);
      return await user.related('folders').create({ name });
    } catch (error) {
      return response.status(500).send(error);
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    // const folder = await Folder.findByOrFail({ id: params.id, userId: params.userId });
    return await Folder.query().where({ params }).firstOrFail();
  }
  /**
   * Handle form submission for the create action
   */
  // async store({ request, response }: HttpContext) {}

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
