import { DateTime } from 'luxon';
import hash from '@adonisjs/core/services/hash';
import { compose } from '@adonisjs/core/helpers';
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm';
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid';
import type { HasMany } from '@adonisjs/lucid/types/relations';
import Folder from './folder.js';
import Note from './note.js';

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
});

export default class User extends compose(BaseModel, AuthFinder) {
  @hasMany(() => Folder)
  declare folders: HasMany<typeof Folder>;

  @hasMany(() => Note)
  declare notes: HasMany<typeof Note>;

  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare firstName: string | null;

  @column()
  declare lastName: string | null;

  @column()
  declare username: string | null;

  @column()
  declare email: string;

  @column()
  declare password: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null;
}
