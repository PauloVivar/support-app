import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfileDto, UpdateProfileDto } from './profiles.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async findAll(): Promise<Profile[]> {
    const profiles = await this.profileRepository.find();
    return profiles;
  }

  async getProfileById(id: string) {
    const profile = await this.findOne(id);
    return profile;
  }

  async create(profile: CreateProfileDto) {
    try {
      const { userDni, userEmail, userPhone, user, ...profileData } = profile;

      if (!userDni || !userEmail || !userPhone) {
        throw new BadRequestException('userDni, userEmail y userPhone son obligatorios');
      }

      const userToSave = {
        ...user,
        username: userDni,
        email: userEmail,
        phone: userPhone,
      };

      const profileToSave = {
        ...profileData,
        userDni,
        userEmail,
        userPhone,
        user: userToSave,
      };

      const newProfile = await this.profileRepository.save(profileToSave);
      return newProfile;
    } catch {
      throw new BadRequestException(`Error al crear el usuario y perfil`);
    }
  }

  async update(id: string, changes: UpdateProfileDto) {
    const profile = await this.findOne(id);
    const updatedProfile = this.profileRepository.merge(profile, changes);
    return this.profileRepository.save(updatedProfile);
  }

  async delete(id: string) {
    const profile = await this.findOne(id);
    const deletedProfile = this.profileRepository.delete(profile.id);
    return { deletedProfile, message: `Usuario con id ${id} eliminado correctamente` };
  }

  private async findOne(id: string) {
    const profile = await this.profileRepository.findOneBy({ id });
    if (!profile) {
      throw new NotFoundException(`El usuario y perfil con el ${id} no existe`);
    }
    return profile;
  }
}
