import User from '#models/user';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        id: 1,
        email: 'test@email.com',
        password: 'test1234',
        firstName: 'First',
        lastName: 'User',
      },
      {
        id: 2,
        email: 'test@gmail.com',
        password: 'test1234',
        firstName: 'Second',
        lastName: 'User',
      },
      {
        id: 3,
        email: 'test@yahoo.com',
        password: 'test1234',
        firstName: 'Third',
        lastName: 'User',
      },
      {
        id: 4,
        email: 'test@hotmail.com',
        password: 'test1234',
        firstName: 'Fourth',
        lastName: 'User',
      },
    ]);
  }
}
