/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';

const FoldersController = () => import('#controllers/folders_controller');
const UsersController = () => import('#controllers/users_controller');

router
  .get('/', (ctx) => {
    return ctx.inertia.render('home', undefined, { cssClass: 'home' });
  })
  .as('home');

router.get('/register', [UsersController, 'create']).as('register.form');
router.post('/register', [UsersController, 'store']).as('register.submit');

router.get('/login', [UsersController, 'create']).as('login.form');
router.post('/login', [UsersController, 'store']).as('login.submit');

router.get('/user/:id', [UsersController, 'show']);

router.post('/folders/', [FoldersController, 'store']);
router.get('/folders/:userId', [FoldersController, 'index']);
router.get('/folders/:userId/:id', [FoldersController, 'show']);

// router.get('/login', (ctx) => {
//   ctx.inertia.render('login');
// });
