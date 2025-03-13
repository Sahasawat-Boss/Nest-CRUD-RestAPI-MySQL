import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attraction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    coverimage: string;
    
    @Column()
    detail: string;
    
    @Column("decimal", { precision: 11, scale: 7 })
    longitude: number;
    
    @Column("decimal", { precision: 11, scale: 7 })
    latitude: number;
}    