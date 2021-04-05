import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('journey')
export class Journey{

    @PrimaryGeneratedColumn()
    journeyId: number

    @Column({type: "varchar", length: 50})
    userOrigin: string

    @Column({type: "varchar", length: 50})
    userDestination: string
}