import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async getUserById(id: string) {
    const user = await this.findOne(id);
    return user;
  }

  async create(user: CreateUserDto) {
    try {
      const newUser = await this.userRepository.save(user);
      return newUser;
    } catch {
      throw new BadRequestException(`Error al crear el usuario`);
    }
  }

  async update(id: string, changes: UpdateUserDto) {
    const user = await this.findOne(id);
    const updatedUser = this.userRepository.merge(user, changes);
    return this.userRepository.save(updatedUser);
  }

  async delete(id: string) {
    const user = await this.findOne(id);
    const deletedUser = this.userRepository.delete(user.id);
    return { deletedUser, message: `Usuario con id ${id} eliminado correctamente` };
  }

  private async findOne(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`El usuario con el ${id} no existe`);
    }
    return user;
  }
}
