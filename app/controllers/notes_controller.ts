import Note from '#models/note';
import User from '#models/user';
import type { HttpContext } from '@adonisjs/core/http';

export default class NotesController {
  /**
   * Display a list of resource
   */
  async index({ params }: HttpContext) {
    return await Note.query().where({ userId: params.id }).orderBy('updatedAt', 'desc');
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const { content, title, userId } = request.body();
    try {
      const user = await User.findOrFail(userId);
      return await user.related('notes').create({ content, title });
    } catch (error) {
      return response.status(500).send(error);
    }
  }

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
  async update({ request, response }: HttpContext) {
    const { id, userId, title, content } = request.body();
    const note = await Note.findOrFail(id);
    try {
      await note.merge({ id, userId, title, content }).save();
      return note;
    } catch (error) {
      return response.status(500).send(error);
    }
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const note = await Note.findOrFail(params.id);
    await note.delete();
  }
}
