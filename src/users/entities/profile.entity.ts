import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('adm_perfiles')
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'string', unique: true, name: 'usuario_dni', nullable: true })
  userDni: string;

  @Column({ type: 'string', unique: true, name: 'usuario_email', nullable: true })
  userEmail: string;

  @Column({ type: 'string', name: 'telefono', nullable: true })
  userPhone: string;

  @Column({ type: 'string', name: 'usuario_avatar', nullable: true })
  userAvatar: string;

  @Column({ type: 'string', name: 'primer_nombre', nullable: true })
  firstName: string;

  @Column({ type: 'string', name: 'segundo_nombre', nullable: true })
  secondName: string;

  @Column({ type: 'string', name: 'primer_apellido', nullable: true })
  lastName: string;

  @Column({ type: 'string', name: 'segundo_apellido', nullable: true })
  secondLastName: string;

  @Column({ type: 'date', name: 'fecha_nacimiento', nullable: true })
  birthDate: Date;

  @Column({ type: 'string', name: 'numero_casa', nullable: true })
  houseNumber: string;

  @Column({ type: 'string', name: 'direccion', nullable: true })
  address: string;

  @Column({ type: 'string', name: 'parroquia', nullable: true })
  parish: string;

  @Column({ type: 'string', name: 'ciudad', nullable: true })
  city: string;

  @Column({ type: 'string', name: 'provincia', nullable: true })
  state: string;

  @Column({ type: 'string', name: 'pais', nullable: true })
  country: string;

  @Column({ type: 'number', name: 'tipo_identificacion', nullable: true })
  identificationType: number;

  @Column({ type: 'number', name: 'persona_legal', nullable: true })
  legalPerson: number;

  @Column({ type: 'number', name: 'estado_civil', nullable: true })
  maritialStatus: number;

  @Column({ type: 'string', name: 'contrayente', nullable: true })
  spouse: string;

  @Column({ type: 'string', name: 'usuario_id', nullable: true })
  userId: string;

  @Column({ type: 'string', name: 'parroquia_id', nullable: true })
  parishId: string;

  @Column({ type: 'string', name: 'ciudad_id' })
  cityId: string;

  @Column({ type: 'string', name: 'provincia_id', nullable: true })
  stateId: string;
}
