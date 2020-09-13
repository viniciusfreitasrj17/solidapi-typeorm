import User from '../entities/User';

export interface IUserRepository {
  findByName(name: string): Promise<User | undefined>;
  saveUser(user: User): Promise<void>;
  listUsers(): Promise<User[] | undefined>;
}
