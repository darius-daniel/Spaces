import Folder from '#models/folder';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Folder.createMany([
      { id: 1, userId: 1, name: 'Personal' },
      { id: 2, userId: 1, name: 'School' },
      { id: 3, userId: 2, name: 'Work' },
      { id: 4, userId: 1, name: 'Misc' },
    ]);
  }
}
