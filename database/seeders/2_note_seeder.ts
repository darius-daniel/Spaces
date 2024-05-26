import Note from '#models/note';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Note.create({
      userId: 1,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo illum doloremque nemo illo eum tenetur dolores aspernatur perspiciatis iure delectus ducimus, eligendi est, velit quaerat recusandae exercitationem dolorem sapiente corrupti!',
    });
  }
}
