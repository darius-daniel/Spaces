/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const NotesController = () => import('#controllers/notes_controller');
import router from '@adonisjs/core/services/router';

const UsersController = () => import('#controllers/users_controller');

router
  .get('/', (ctx) => {
    return ctx.inertia.render('home', undefined, { cssClass: 'home' });
  })
  .as('home');

router
  .group(() => {
    router.get('/register', [UsersController, 'create']).as('form');
    router.post('/register', [UsersController, 'store']).as('submit');
  })
  .as('reg');

router
  .group(() => {
    router.get('/login', [UsersController, 'create']).as('form');
    router.post('/login', [UsersController, 'store']).as('submit');
  })
  .as('login');

router
  .group(() => {
    router.group(() => {
      router
        .group(() => {
          router.post('create', [NotesController, 'store']);
          router.put('update', [NotesController, 'update']);
          router.delete('delete/:noteId', [NotesController, 'destroy']);
          router.get('/:noteId', [NotesController, 'show']);
          router.get('', [NotesController, 'index']);
        })
        .prefix('notes');
      router.get('', [UsersController, 'show']);
    });
  })
  .prefix('user/:id');
