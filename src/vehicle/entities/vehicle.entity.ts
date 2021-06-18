import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('vehicle')
export class Vehicle{

    @PrimaryGeneratedColumn()
    vehicleId: number

    @Column({type: "varchar", length: 20, default: 'Car'})
    vehicleType: string;

    @Column({type: "varchar", length: 10, default: null})
    plate: string;

    @Column({type: "varchar", length: 30})
    brand: string

    @Column({type: "int"})
    userId: number
}