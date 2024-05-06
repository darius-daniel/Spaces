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
    password: vine.string().ascii().minLength(8),
    password_confirmation: vine.string().ascii().minLength(8).sameAs('password'),
  })
);

export const loginFormValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email().normalizeEmail(),
    password: vine.string().ascii().minLength(8),
  })
);
