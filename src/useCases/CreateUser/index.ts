import { DataBaseUsersRepository } from '../../repositories/implementations/DataBaseUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const dataBaseUsersRepository = new DataBaseUsersRepository();

const createUserUseCase = new CreateUserUseCase(dataBaseUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
