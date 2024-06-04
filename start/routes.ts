/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel';
import router from '@adonisjs/core/services/router';

const UsersController = () => import('#controllers/users_controller');
const NotesController = () => import('#controllers/notes_controller');
const SessionController = () => import('#controllers/session_controller');
const ProfileController = () => import('#controllers/profile_controller');

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
          router.get(':noteId', [NotesController, 'show']).use(middleware.auth());
          router.get('', [NotesController, 'index']).use(middleware.auth());
        })
        .prefix('notes');
      router.get('profile', [ProfileController, 'show']).use(middleware.auth());
      router.patch('profile', [ProfileController, 'update']).use(middleware.auth());
      router.get('', [UsersController, 'show']).use(middleware.auth());
    });
  })
  .prefix('user/:id');
