import { DateTime } from 'luxon';
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm';
import type { HasMany } from '@adonisjs/lucid/types/relations';
import Note from './note.js';

export default class Folder extends BaseModel {
  @hasMany(() => Note)
  declare notes: HasMany<typeof Note>;

  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare userId: number;

  @column()
  declare name: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;
}
