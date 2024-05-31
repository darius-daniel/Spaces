import vine from '@vinejs/vine';

/**
 * Validates the account registration account
 */
export const registrationFormValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .normalizeEmail()
      .unique(async (db, value, _field) => {
        const result = await db.from('users').select('id').where('email', value);
        return result.length ? false : true;
      }),
    password: vine.string().ascii().minLength(8).confirmed(),
  })
);

export const loginFormValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email().normalizeEmail(),
    password: vine.string().ascii().minLength(8),
  })
);

export const fullNameUpdateValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim().alpha().minLength(1),
    lastName: vine.string().trim().alpha().minLength(1),
  })
);

export const userNameUpdateValidator = vine.compile(
  vine.object({
    username: vine
      .string()
      .trim()
      .alphaNumeric()
      .minLength(3)
      .maxLength(12)
      .unique(async (db, value, _field) => {
        const result = await db.from('users').select('id').where('username', value);
        return result.length ? false : true;
      }),
  })
);

export const emailUpdateValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .trim()
      .email()
      .normalizeEmail()
      .unique(async (db, value, _field) => {
        const result = await db.from('users').select('id').where('email', value);
        return result.length ? false : true;
      }),
    password: vine.string().ascii().minLength(8),
  })
);

export const passwordUpdateValidator = vine.compile(
  vine.object({
    password: vine.string().ascii().minLength(8).confirmed(),
    currentPassword: vine.string().ascii().minLength(8),
  })
);
