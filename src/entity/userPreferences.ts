import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class UserPreferences {
	@PrimaryColumn()
	id!: string;

	@Column('text')
	staffPingStatusesOverride!: string;
}
