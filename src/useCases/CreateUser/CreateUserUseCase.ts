import User from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByName(data.name);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User();
    user.name = data.name;

    await this.userRepository.saveUser(user);
  }
}
