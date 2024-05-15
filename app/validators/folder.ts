import vine from '@vinejs/vine';

export const createFolderValidator = vine.compile(
  vine.object({
    name: vine.string().trim().alphaNumeric(),
    userId: vine.number().positive(),
  })
);
