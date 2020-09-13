import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';

const router = Router();

// router User
router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

export default router;
