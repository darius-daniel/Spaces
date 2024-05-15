import Folder from '#models/folder';
import User from '#models/user';
import { createFolderValidator } from '#validators/folder';
import type { HttpContext } from '@adonisjs/core/http';

export default class FoldersController {
  /**
   * Display a list of resource
   */
  async index({ params, response }: HttpContext) {
    const folders = await Folder.findManyBy('userId', params.userId);
    console.log(folders);
    const foldersJSON = folders.map((folder) => folder.serialize());

    if (!folders) {
      return response.status(404).send({});
    } else {
      return response.send(foldersJSON);
    }
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const { name, userId } = await request.validateUsing(createFolderValidator);
    const user = await User.findOrFail(userId);
    const folder = await user.related('folders').create({ name });

    if (folder) return response.send(folder.serialize());
    else return response.status(500).send({});
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    // const folder = await Folder.findByOrFail({ id: params.id, userId: params.userId });
    const folder = await Folder.query().where({ id: params.id, userId: params.userId });

    return response.send(folder);
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
