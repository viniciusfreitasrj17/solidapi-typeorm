import User from '../../entities/User';
import { IUserRepository } from '../IUserRepository';
import { getRepository } from 'typeorm';

export class DataBaseUsersRepository implements IUserRepository {
  async findByName(name: string): Promise<User | undefined> {
    const repo = getRepository(User);
    const user = repo.findOne({ where: { name } });

    if (user) {
      return user;
    }
  }

  async saveUser(user: User): Promise<void> {
    const repo = getRepository(User);

    await repo.save(user);
  }

  async listUsers(): Promise<User[] | undefined> {
    const repo = getRepository(User);

    const users = repo.find();

    if (users) {
      return users;
    }
  }
}
