import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto, UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      name: '0302297908',
      email: 'paulo.vivarnif@gmail.com',
    },
    {
      id: '2',
      name: '0302297909',
      email: 'paulo.vivarnif9@gmail.com',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  getUserById(id: string) {
    const index = this.findOne(id);
    return this.users[index];
  }

  create(user: CreateUserDto) {
    this.users.push(user);
    return user;
  }

  update(id: string, updatedUser: UpdateUserDto) {
    const index = this.findOne(id);

    const currentUser = this.users[index];
    const newUser = {
      ...currentUser,
      ...updatedUser,
    };

    this.users[index] = newUser;
    return newUser;
  }

  delete(id: string) {
    const index = this.findOne(id);

    const deletedUser = this.users.splice(index, 1);
    return deletedUser[0];
  }

  private findOne(id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException(`El usuario con el ${id} no existe`);
    }
    return index;
  }
}
