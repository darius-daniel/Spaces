import vine from '@vinejs/vine';

export const noteValidator = vine.compile(
  vine.object({
    userId: vine.number(),
    folderId: vine.number(),
    title: vine.string(),
    body: vine.string(),
  })
);
