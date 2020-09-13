import { DataBaseUsersRepository } from '../../repositories/implementations/DataBaseUsersRepository';
import { ListUsersController } from './ListUsersController';
import { ListUsersUseCase } from './ListUsersUseCase';

const dataBaseUsersRepository = new DataBaseUsersRepository();

const listUsersUseCase = new ListUsersUseCase(dataBaseUsersRepository);

const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersUseCase, listUsersController };
