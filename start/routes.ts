/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const NotesController = () => import('#controllers/notes_controller');
const SessionController = () => import('#controllers/session_controller');
import router from '@adonisjs/core/services/router';
import { middleware } from '#start/kernel';

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
    router.get('/login', [SessionController, 'create']).as('form');
    router.post('/login', [SessionController, 'store']).as('submit');
    router.post('/logout', [SessionController, 'destroy']).use(middleware.auth()).as('logout');
  })
  .as('session');

router
  .group(() => {
    router.group(() => {
      router
        .group(() => {
          router.post('create', [NotesController, 'store']).use(middleware.auth());
          router.put('update', [NotesController, 'update']).use(middleware.auth());
          router.delete('delete/:noteId', [NotesController, 'destroy']).use(middleware.auth());
          router.get('/:noteId', [NotesController, 'show']).use(middleware.auth());
          router.get('', [NotesController, 'index']).use(middleware.auth());
        })
        .prefix('notes');
      router.get('', [UsersController, 'show']).use(middleware.auth());
      router.patch('', [UsersController, 'edit']).use(middleware.auth());
    });
  })
  .prefix('user/:id');
