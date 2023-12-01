
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export default interface IEntity{
    id: number;
}

@Entity()
export default class BaseEntity implements IEntity {
    @PrimaryGeneratedColumn()
    id: number;
}