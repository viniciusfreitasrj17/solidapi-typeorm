import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';
import { listUsersController } from './useCases/ListUsers';

const router = Router();

// router User
router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});
router.get('/users', (request, response) => {
  return listUsersController.handle(request, response);
});

export default router;
