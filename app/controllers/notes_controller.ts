import Note from '#models/note';
import type { HttpContext } from '@adonisjs/core/http';

export default class NotesController {
  /**
   * Display a list of resource
   */
  async index({ params }: HttpContext) {
    const { userId, folderId } = params;
    let clause;

    if (userId && folderId) clause = { userId, folderId };
    else clause = { userId };

    return await Note.query().where(clause);
  }

  /**
   * Handle form submission for the create action
   */
  // async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return await Note.query().where(params).firstOrFail();
  }

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
