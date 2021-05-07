import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('userjourney')
export class Userjourney{

    @PrimaryGeneratedColumn()
    userjourneyId: number

    @Column({type: "int"})
    userId_uj: number

    @Column({type: "int"})
    journeyId_uj: number
}