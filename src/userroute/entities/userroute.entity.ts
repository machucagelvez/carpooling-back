import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('userroute')
export class Userroute{

    @PrimaryGeneratedColumn()
    userrouteId: number

    @Column({type: "int"})
    userId_ur: number

    @Column({type: "int"})
    routeId_ur: number
}