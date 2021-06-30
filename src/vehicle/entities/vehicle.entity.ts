import { Route } from "src/route/entities/route.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


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

    @OneToMany(() => Route, route => route.vehicle)
    route: Route[]

    @ManyToOne(() => User, user => user.vehicle, {eager: true})
    user: User
}