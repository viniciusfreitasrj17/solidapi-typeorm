import { Entity, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import Global from './Global';

@Entity('users')
export default class User extends Global {
  @Column()
  @IsNotEmpty({ message: 'Preencha este campo' })
  name: string;
}
