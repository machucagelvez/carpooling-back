import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User{

    @PrimaryGeneratedColumn()
    userId: number;

    @Column({type: "varchar", length: 30})
    user: string;

    @Column({type: "varchar", length: 30})
    password: string;

    @Column({type: "varchar", length: 50})
    email: string;

    @Column({type: "varchar", length: 20})
    phone: string;

    @Column({type: "varchar", length: 20})
    vehicleType: string;

    @Column({type: "bool", default: true})
    userType: boolean;

    @Column({type: "varchar", length: 100})
    waLink: string;

    @Column({type: "varchar", length: 10})
    plate: string;

    @Column({type: "bool"})
    rol: boolean;

    @Column({type: "int"})
    notificationId: number;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;
}