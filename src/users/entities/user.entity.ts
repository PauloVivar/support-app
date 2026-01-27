import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('adm_usuarios')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'creado' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'actualizado' })
  updatedAt: Date;

  @Column({ type: 'number', name: 'estado' })
  status: number;

  @Column({ type: 'string', unique: true, name: 'username' })
  username: string;

  @Column({ type: 'string', unique: true, name: 'email' })
  email: string;

  @Column({ type: 'string', name: 'contrasenia' })
  password: string;

  @Column({ type: 'string', name: 'celular' })
  cellphone: string;

  @Column({ type: 'string', name: 'avatar', nullable: true })
  avatar: string;
}
