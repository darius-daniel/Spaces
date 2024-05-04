/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';
const UsersController = () => import('#controllers/users_controller');

router
  .get('/', (ctx) => {
    return ctx.inertia.render('home', undefined, { cssClass: 'home' });
  })
  .as('home');

router.get('/register', [UsersController, 'create']).as('register.form');
router.post('/register', [UsersController, 'store']).as('register.submit');

router.get('/login', [UsersController, 'create']).as('login.form');
router.post('/login', [UsersController, 'show']).as('login.submit');

// router.get('/login', (ctx) => {
//   ctx.inertia.render('login');
// });
