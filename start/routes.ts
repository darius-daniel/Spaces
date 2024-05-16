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

const FoldersController = () => import('#controllers/folders_controller');
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

router.get('/user/:id', [UsersController, 'show']);

router
  .group(() => {
    router.post('', [FoldersController, 'store']);
    router.get(':userId/:id', [FoldersController, 'show']);
    router.get(':userId', [FoldersController, 'index']);
  })
  .prefix('folders');

router
  .group(() => {
    router.get(':userId/:folderId/:id', [NotesController, 'show']);
    router.get(':userId/:folderId', [NotesController, 'index']);
    router.get(':userId', [NotesController, 'index']);
  })
  .prefix('notes');
