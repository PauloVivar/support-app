import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';
@Entity('adm_usuarios')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'creado' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'actualizado' })
  updatedAt: Date;

  @Column({ type: 'int', name: 'estado' })
  status: number;

  @Column({ type: 'text', unique: true, name: 'username' })
  username: string;

  @Column({ type: 'text', unique: true, name: 'email' })
  email: string;

  @Exclude()
  @Column({ type: 'text', name: 'contrasenia' })
  password: string;

  @Column({ type: 'text', name: 'celular' })
  phone: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
