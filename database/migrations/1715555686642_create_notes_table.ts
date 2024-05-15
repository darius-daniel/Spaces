import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'notes';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('user_id').unsigned().references('users.id').notNullable().onDelete('CASCADE');
      table
        .integer('folder_id')
        .unsigned()
        .references('folders.id')
        .notNullable()
        .onDelete('CASCADE');

      table.string('title', 50).notNullable();
      table.text('body').notNullable().defaultTo('');

      table.timestamp('created_at');
      table.timestamp('updated_at');
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
