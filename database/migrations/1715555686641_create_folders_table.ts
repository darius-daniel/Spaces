import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'folders';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('user_id').unsigned().references('users.id').notNullable().onDelete('CASCADE');

      table.string('name', 50).notNullable();

      table.timestamp('created_at').notNullable();
      table.timestamp('updated_at').notNullable();
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
